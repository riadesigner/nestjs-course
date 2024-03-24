const express = require('express');
const cors = require('cors');
const formData = require("express-form-data");
const admin = require("firebase-admin");
const serviceAccount = require("./path/to/serviceAccountKey.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
});
const db = admin.database();
const dbFS = admin.firestore();

const app = express();

app.use(formData.parse());
app.use(cors());

//database
app.get('/api/rd/', async (req, res) => {
    const info = (await db.ref(`cities`).once('value')).val();
    res.json(info || {});
});
app.get('/api/rd/:id', async (req, res) => {
    let {id} = req.params;
    const info = (await db.ref(`cities`)
        .child(id)
        .once('value'));

    res.json(info.val() || {});
});
app.post('/api/rd/', async (req, res) => {
    const {body} = req.body;
    const cities = (await db
        .ref(`cities`)
        .push(body));

    res.status(201);
    res.json({id: cities.key});
});
app.put('/api/rd/:id', async (req, res) => {
    const {body} = req;
    const {id} = req.params;

    const el = await db
        .ref(`cities`)
        .child(id)
        .update(body);

    res.json(true);
});
app.delete('/api/rd/:id', async (req, res) => {
    let {id} = req.params;
    const info = (await db.ref(`cities`)
        .child(id)
        .remove());

    res.json(true);
});

//firestore
app.get('/api/fs/', async (req, res) => {
    const info = await dbFS.collection(`cities`).get();
    let rez = {};
    info.forEach((doc) => {
        rez[doc.id] = doc.data();
    });
    res.json(rez || {});
});
app.get('/api/fs/:id', async (req, res) => {
    let {id} = req.params;
    const info = await dbFS.collection(`cities`).doc(id).get();
    if (!info.exists) {
        res.status(404).json('404');
    } else {
        res.json(info.data());
    }
});
app.post('/api/fs/', async (req, res) => {
    const {body} = req;

    const docRef = await dbFS.collection(`cities`).add(body);

    res.status(201);
    res.json({id: docRef.id});
});
app.put('/api/fs/:id', async (req, res) => {
    const {body} = req;
    const {id} = req.params;

    const docRef = dbFS.collection(`cities`).doc(id);

    try {
        const rez = await docRef.update(body);
        res.json(rez);
    } catch (e) {
        console.error(e);
        res.json(false);
    }

});
app.delete('/api/fs/:id', async (req, res) => {
    let {id} = req.params;
    const rez = await dbFS.collection(`cities`).doc(id).delete();
    res.json(rez);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

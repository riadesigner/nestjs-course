const functions = require("firebase-functions");
//
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorldNew = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});



// Модерирует сообщения в database
exports.moderator = functions.database.ref('/messages/{messageId}').onWrite((change) => {
    const message = change.after.val();

    if (message && !message.sanitized) {
        console.log('Retrieved message content: ', message);
        const moderatedMessage = `${message.text} update`;
        // Обновите базу данных Firebase
        return change.after.ref.update({
            text: moderatedMessage,
            sanitized: true,
        });
    }
    return null;
});


const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));

// build multiple CRUD interfaces:
app.get('/:id', (req, res) => res.json({msg: `get: /${req.params.id}`}));
app.post('/', (req, res) => res.json({msg: `create`}));
app.put('/:id', (req, res) => res.json({msg: `update: /${req.params.id}`}));
app.delete('/:id', (req, res) => res.json({msg: `delete: /${req.params.id}`}));
app.get('/', (req, res) => res.json({msg: `get list`}));

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);

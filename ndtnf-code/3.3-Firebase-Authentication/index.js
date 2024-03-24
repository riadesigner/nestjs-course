const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const bodyParser = require("body-parser");
const express = require("express");
const admin = require("firebase-admin");

const serviceAccount = require("./path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const csrfMiddleware = csrf({cookie: true});


const app = express();

app.engine("html", require("ejs").renderFile);

app.use(bodyParser());
app.use(cookieParser());
app.use(csrfMiddleware);

app.all("*", (req, res, next) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    next();
});

app.get("/login", function (req, res) {
    res.render("login.html", {title: 'Авторизация'});
});

app.get("/signup", function (req, res) {
    res.render("signup.html", {
        title: 'Регистрация',
        csrfToken: req.csrfToken(),
    });
});

app.post("/signup", function (req, res) {
    const {name, email, password} = req.body;
    console.log('req.body', req.body);
    admin.auth().createUser({
        email: email,
        password: password,
        displayName: name,
    })
        .then((userRecord) => {
            console.log('Successfully created new user:', userRecord.uid);
            res.redirect("/login");
        })
        .catch((error) => {
            console.log('Error creating new user:', error);
            res.redirect("/signup");
        });
});


app.post('/sessionLogin', (req, res) => {
    const idToken = req.body.idToken.toString();

    const expiresIn = 60 * 60 * 24 * 5 * 1000;

    admin
        .auth()
        .createSessionCookie(idToken, {expiresIn})
        .then(
            (sessionCookie) => {
                res.cookie('session', sessionCookie);
                res.json({status: 'success'});
            },
            (error) => {
                console.error('error', error);
                res.status(401).redirect('/login');
            }
        );
});

app.get("/profile", function (req, res) {
    const sessionCookie = req.cookies.session || "";

    admin
        .auth()
        .verifySessionCookie(sessionCookie)
        .then((userRecord) => {
            res.render("profile.html", {
                title: 'Профиль',
                userRecord: userRecord,
            });
        })
        .catch((error) => {
            res.redirect("/login");
        });
});

app.get("/", function (req, res) {
    res.render("index.html", {title: 'Главная'});
});

app.post("/sessionLogin", (req, res) => {
    const idToken = req.body.idToken.toString();
    const expiresIn = 60 * 60 * 24 * 5 * 1000;

    admin
        .auth()
        .getUserByEmail()
        .createSessionCookie(idToken, {expiresIn})
        .then(
            (sessionCookie) => {
                res.cookie("session", sessionCookie);
                res.json({status: "success"});
            },
            (error) => {
                res.status(401).send("UNAUTHORIZED REQUEST!");
            }
        );
});

app.get("/sessionLogout", (req, res) => {
    res.clearCookie("session");
    res.redirect("/login");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

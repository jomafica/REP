require("dotenv").config();
const admin = require("firebase");
var express = require('express');
const app = express()
app.use(express.json())
var router = express.Router();

// Initialize Cloud Firestore through Firebase
admin.initializeApp({
  apiKey: process.env.apiKey,
  authDomain: "ipreputation-21a8e.firebaseapp.com",
  projectId: 'ipreputation-21a8e'
});

var db = admin.firestore();

/* GET ip listing. */
router.post('/', function(req, res, next) {

  if(req.method !== 'POST') {
    return res.status(405).send(`${req.method} is not allowed. Use POST.`);
  }

  (async () => {
    console.log(req.body.ips)
    
    answer = new Array

    try {
      await db
        .collection("main")
        .where('ip','in', req.body.ips)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            answer.push(doc.data())
          });
        return res.status(200).send(answer); 
      });
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
  })();
});

module.exports = router;

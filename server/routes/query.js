var express = require('express');
const db = require("../private/db");
const app = express()
app.use(express.json())
var router = express.Router();

// GET and PUT methods 
router.route('/query')

  .all(function (req, res, next) {

    if(req.method !== 'GET' && req.method !== 'POST') {
      return res.status(405).send(`${req.method} method is not allowed.`);
    }

    next()
  })

  .get(function(req, res) {

    (async () => {
  
      console.log(req.body.ips)
      answer = new Array
  
      try {
        await db.dbconnection()
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
  })

  .post(function(req, res) {

    (async () => {

      try {
        await db.dbconnection()
          .collection("main")
          .doc(req.body[0].ip)
          .set(req.body[0])
          .then(() => {
              console.log("Document successfully written!");
              return res.status(200).send("OK");
          })
        } 
        catch (error) {
          console.error("Error writing document: ", error);
          return res.status(500).send(error);
        }

    })();
  })

module.exports = router;

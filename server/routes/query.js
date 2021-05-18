var express = require('express');
const db = require("../private/db");
const app = express()
app.use(express.json())
var router = express.Router();

/* GET ip listing. */
router.get('/', function(req, res) {

  if(req.method !== 'GET') {
    return res.status(405).send(`${req.method} is not allowed. Use GET.`);
  }

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
});

module.exports = router;

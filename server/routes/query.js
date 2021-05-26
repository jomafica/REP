var express = require('express');
const db = require("../private/db");
const app = express()
app.use(express.json())
var router = express.Router();

// GET and PUT methods 
router.route('/query')

  .all(function (req, res, next) {

    if(req.method !== 'PUT' && req.method !== 'POST') {
      return res.status(405).send(`${req.method} method is not allowed.`);
    }
    next()
  })

  .post(function(req, res) {

    return res.send([
      {
      "ip" : "1.1.1.1",
      "domain": "oneoneone.com",
      "coiso" : "1.1.1.1", 
      },
    {
      "ip" : "1.1.1.2",
      "domain": "twotwotwo.com" 
    }]
    )
    
    //(async () => {
    //  console.log(req.body.ips)
    //  var answer = []
    //  try {
    //    await db.dbconnection()
    //      .collection("main")
    //      .doc(req.body.ips.toString())
    //      .get()
    //      .then(doc => { return res.status(200).send(doc.data())}); //corrigir !
    //    } catch (error) {
    //      console.log(error);
    //      return res.status(500).send(error);
    //    }
    //})();
  })

  .put(function(req, res) {

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

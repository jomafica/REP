var express = require('express');
const db = require("../private/db");
const app = express()
app.use(express.json())
var router = express.Router();


class Ips {
  constructor (ip, domain, domain1, domain2, hash, hash1, hash2, hyperlink) {
      this.ip = ip;
      this.domain = domain;
      this.domain1 = domain1;
      this.domain2 = domain2;
      this.hash = hash;
      this.hash1 = hash1;
      this.hash2 = hash2;
      this.hyperlink = hyperlink;
  }
  toString() {
      return this.ip + ', ' + this.domain + ', ' + this.domain1
      + ', ' + this.domain2 + ', ' + this.hash + ', ' + this.hash1
      + ', ' + this.hash2 + ', ' + this.hyperlink ;
  }
}

// Firestore data converter
var ipConverter = {
  toFirestore: function(ipss) {
      return {
          ip: ipss.ip,
          domain: ipss.domain,
          domain1: ipss.domain1,
          domain2: ipss.domain2,
          hash: ipss.hash,
          hash1: ipss.hash1,
          hash2: ipss.hash2,
          hyperlink: ipss.hyperlink
          };
  },
  fromFirestore: function(snapshot, options){
      const data = snapshot.data(options);
      return new Ips(data.ip, data.domain, data.domain1, data.domain2, data.hash, data.hash1, data.hash2, data.hyperlink);
  }
};

/* PUT ip listing. */
router.post('/', function(req, res) {

  if(req.method !== 'POST') {
    return res.status(405).send(`${req.method} is not allowed. Use POST.`);
  }
 
  var temp_array = new Array

  temp_array.map(req.body.forEach(elem => console.log(elem)));  // no working

  (async () => {
    console.log(temp_array)
    
    answer = new Array

    try {
      await db.dbconnection()
        .collection("main")
        .doc(req.body.ip)
        .withConverter(ipConverter)
        .set(new Ips(req.body))
        .then(() => {
            console.log("Document successfully written!");
        })
      } catch (error) {
        console.error("Error writing document: ", error);
        return res.status(500).send(error);
      }
  })();
});

module.exports = router;

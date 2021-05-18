require("dotenv").config();
const admin = require("firebase");

// Initialize Cloud Firestore through Firebase
exports.dbconnection = () => {

    if (!admin.apps.length) {
      admin.initializeApp({
        apiKey: process.env.apiKey,
        authDomain: "ipreputation-21a8e.firebaseapp.com",
        projectId: 'ipreputation-21a8e'
      });
  }else {
      admin.app(); // if already initialized, use that one
  }

    var db = admin.firestore();
    return db
}

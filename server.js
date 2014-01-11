(function() {
  "use strict";

  var express = require('express'),
      app = express(),
      port = process.env.PORT || 5000,

      mongo = require('mongodb').MongoClient,
      mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/yonems';

  mongo.connect(mongoURI, function(err, db) {
    console.log("\nMongo status...");
    if (err) { console.log("...unable to connect!"); return; }
    console.log("...authenticated.");
  });

  app.use(express.static(__dirname + '/web'));
  app.listen(port);

  console.log("Listening on port " + port + "...");
})();

(function() {
  "use strict";

  var express = require('express'),
      app = express(),
      port = process.env.PORT || 5000;

  app.use(express.static(__dirname + '/web'));
  app.listen(port);

  console.log("Listening on port " + port + "...");
})();

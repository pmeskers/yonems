(function() {
  "use strict";

  var express = require('express'),
      app = express();

  app.use(express.static(__dirname + '/views'));
  app.listen(3000);
  console.log("Listening on port 3000...");

})();

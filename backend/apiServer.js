const registerRouter = require('./router')
const express = require("express");

const port = 3600;

const app = express();


registerRouter(app);


module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("ApiServer Listening at http://localhost:" + port + "\n");
});

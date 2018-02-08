const express = require('express');
const bodyParser = require('body-parser');

var app = express();

//process.env.PORT -> Port assigned by web hosting.
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`BPM APP Started on port ${port}`);
});

module.exports = {app};

'use strict';
// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const fs = require('fs');
const express = require('express');

let app = express();

const dummyData = {count: 12, message: "Hey"};

app.get('/', function(req, res) {
  const htmlPage = fs.readFile('index.html', 'utf8', (err, data) => {
      //This is sure valid, but we don't necessarily find this useful from a user's perspective
      // as no data is actually being passed to the user on a fail; the server just throws an error and crashes
      if (err) throw err;
      // Could also simply call res.status(500).send(err);

      // Not necessarily wrong, but not the most straightforward way to send data either
      // Could be accomplished by using res.sendFile(index.html) outside of a readFile call
      res.send(data);
    });
});

app.get('/data', function(req, res) {
  res.json(dummyData);
});
app.listen(3000);


var jsonData = {count: 12, message: 'hey'};

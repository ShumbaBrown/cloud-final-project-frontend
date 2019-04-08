'use strict';
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const Http = new XMLHttpRequest();
const url='https://us-central1-intro2cloudcomputing4.cloudfunctions.net/function-2';
Http.open("GET", url);
Http.send();
Http.onreadystatechange=(e)=>{
	var str = JSON.stringify(Http.responseText, null, 2);
	// console.log(Http.responseText)
	console.log(str);
}

// [START gae_node_request_example]
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Check console to see response from backend.')
    .end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]
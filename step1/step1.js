
function getAndPrintHTMLChunks () {

var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

  var callback = function(response){
    response.on('data', function(chunk){
      // console.log('test');
      console.log(chunk.toString());
      console.log('\n');
    })
  }

  https.request(requestOptions, callback).end();
}

getAndPrintHTMLChunks();

/*
var https = require('https');

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
}

var callback = function(response) {
  response.on('data', function(chunk){
    console.log('[-- CHUNK OF LENGTH ', chunk.length + ' --]');
    log(chunk.toString());
  });
}

https.request(options, callback).end();
*/
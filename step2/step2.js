function getAndPrintHTML () {

  var https = require('https');
  var buffer = '';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  var callback = function(response){
    response.on('data', function(chunk){
      // console.log('test');
      buffer += chunk.toString('utf8')+'\n'
    })
    response.on('end', function(){
      console.log(buffer.toString());
    })
  }

  https.request(requestOptions, callback).end();
}

getAndPrintHTML();
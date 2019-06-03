var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  var https = require('https');
  var buffer = '';

  var callback = function(response){
    response.on('data', function(chunk){
      // console.log('test');
      buffer += chunk.toString('utf8')+'\n'
    })
    response.on('end', function(){
      console.log(buffer.toString());
    })
  }

  https.request(options, callback).end();
}

getAndPrintHTML(requestOptions);
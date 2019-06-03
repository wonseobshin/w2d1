module.exports = function getHTML (options, callback){
  var https = require('https');
  var buffer = '';

  var get = function (response){
    response.on('data', function(chunk){
      buffer += chunk.toString('utf8')+'\n'
    })
    response.on('end', function(){
      callback(buffer);
    })
  }

  https.request(options, get).end();
}
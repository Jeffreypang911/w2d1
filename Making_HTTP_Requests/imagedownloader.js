var request = require('request');
var fs = require('fs');



request.get('https://sytantris.github.io/http-examples/future.jpg')

  .on('error', function(err) {
    console.log('error')
  })

  .on('response', function(response) {

    console.log('Response Status Code: ' + response.statusCode);
  })

  .on('end', function(response) {
    console.log("Downloaded")
  })

  .pipe(fs.createWriteStream('./future.jpg'))






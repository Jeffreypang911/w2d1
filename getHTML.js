var https = require('https')


var buffer

function getHTML (options, callback) {



  https.get(options, function(response) {

  response.setEncoding('utf8')

  response.on('data', function(data){
    buffer = data + buffer
    callback(buffer);

    })

  response.on('end', function(data){
    console.log("end");
    })
  })
}

  function printHTML (html) {
    console.log(html)
    }



  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getHTML(requestOptions, printHTML)
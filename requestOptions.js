var https = require('https')

function getAndPrintHTML () {

  var buffer

  https.get(requestOptions, function(response) {

  response.setEncoding('utf8')

  response.on('data', function(data){
    buffer = data + buffer
    console.log(buffer)
    })

  response.on('end', function(data){
    console.log("end");
    })
  })
}

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

getAndPrintHTML(getAndPrintHTML(requestOptions))
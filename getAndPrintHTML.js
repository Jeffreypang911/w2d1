var https = require('https')

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var chunks


  https.get(requestOptions, function(response) {

  response.setEncoding('utf8')

  response.on('data', function(data){
    chunks = data + chunks
    console.log(chunks)
    })

  response.on('end', function(data){
    console.log("end");
    })
  })
}

getAndPrintHTML()
var http = require('http'), url = require('url');


var pathName = url.parse(req.url).pathname;
var arrayN = pathName.split('/');

if (pathName === '/') {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Home Page\n Welcome to this magestic website. Here are some calculations you can perform:\n * /add/2/3 \n * /sub/4.5/1.2 \n * /mul/op1/op2 \n * /div/op1/op2')
} else if (pathName === '/add/2/3') {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('5\n')
} else if (pathName === '/sub/4.5/1.2') {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('3.3\n')
} else if (pathName === '/mul/' + arrayN[2] + '/' + arrayN[3]) {

  var op1, op2;
  op1 = arrayN[2];
  op2 = arrayN[3];

  var result = op1 * op2;
  result = result.toFixed(1);

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('' + result)
} else if (pathName === '/dev/' + arrayN[2] + '/' + arrayN[3]) {

  var op1, op2;
  op1 = arrayN[2];
  op2 = arrayN[3];

  var result = op1 / op2;
  result = result.toFixed(1);

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('' + result)

} else {
  res.writeHead(404, {
    'Content-Type': 'text/plain'
  });
  res.end('Page not found\n')
} 

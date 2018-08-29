var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('<!DOCTYPE html>'+
		   '<html>'+
		   ' <head>'+
		   ' <meta charset="utf-8" />'+
		   ' <title>PhantomWeb</title>'+
		   ' </head>'+ 
		   ' <body>'+
		   ' <p>You have arrived at PhantomWeb</p>'+
		   ' </body>'+
		   '</html>');
    response.end();

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

var http=require('http');
http.createServer(function(request,response){

response.end('Started Server')

}).listen('3000')

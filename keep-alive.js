var http = require("http");
http.createServer(function(req, res){
res.write("Executive"); 
res.end();
}).listen(8080);
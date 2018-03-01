var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('E ai pessoal da dasa! '+process.env.MENSAGEM);
    
}).listen(process.env.PORT || 8080);

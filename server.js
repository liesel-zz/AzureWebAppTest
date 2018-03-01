var http = require('http');
const appInsights = require("applicationinsights");
appInsights.setup("12fe6d6e-a431-46a5-b597-e37c43cac43a");
appInsights.start();

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('E ai pessoal da dasa! '+process.env['MENSAGEM']);
    
}).listen(process.env.PORT || 8080);

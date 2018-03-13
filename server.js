var http = require('http');
//const appInsights = require("applicationinsights");
//appInsights.setup(process.env['APPINSIGHT']);
//appInsights.start();

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end("Publicando direto do github"+process.env['MENSAGEM']);
    //res.end('E ai pessoal da dasaaaaaaaaaaaa! '+process.env['MENSAGEM']);
    
}).listen(process.env.PORT || 8080);

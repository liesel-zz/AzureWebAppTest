var http = require('http');
//const appInsights = require("applicationinsights");
//appInsights.setup("dde5233f-06d6-4471-8afe-af07401319e9");
//appInsights.start();

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end("Teste da apicacao"+process.env['MENSAGEM']);
    //res.end('E ai pessoal da dasaaaaaaaaaaaa! '+process.env['MENSAGEM']);
    
}).listen(process.env.PORT || 8080);

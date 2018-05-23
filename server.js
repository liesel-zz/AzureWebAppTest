var http = require('http');
//const appInsights = require("applicationinsights");
//appInsights.setup(process.env['APPINSIGHT']);
//appInsights.start();

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end("Publicando direto do github (com fe agora vai:)"+process.env['MENSAGEM']);
    //res.end('E ai pessoal da FCamara, desculpa pessoal .NET e melhor');
    
 }).listen(process.env.PORT || 8080);
//}).listen(3000);

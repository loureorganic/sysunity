//Chame o módulo HTTP
var http = require("http");

//Crie um servidor HTTP para ouvir as requisições na porta 8000
http.createServer(function (request, response) {

   // Configure o resposta HTTP header com o HTTP status e Content type
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Envie a resposta do body "Hello World"
   response.end('Hello World\n');
}).listen(8000);

// Imprima URL para acessar o servidor
console.log('Server running at http://127.0.0.1:8000/')

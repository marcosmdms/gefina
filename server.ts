/*
// Importa a função createServer (do módulo HTTP do Node), para criar um servidor HTTP.
import { createServer } from "http";

// Importa a função readFileSync (do módulo File System), para ler arquivos do computador.
import { readFileSync } from "fs";

// Cria o servidor HTTP.
// req (request) é a requisição do navegador.
// res (response) é a resposta do servidor.
const server = createServer((req, res) => {
  
// Lê o index.html e armazena esse conteúdo na variável html.
const html = readFileSync("index.html");

  // Define o status e os cabeçalhos e 200 significa que a requisição foi processada com sucesso.
  res.writeHead(200, {
    
    // Informa ao navegador que estamos enviando HTML e que os caracteres estão codificados em UTF-8.
    "Content-Type": "text/html; charset=utf-8",
  });

  // Envia o conteúdo do index.html para o navegador e encerra a resposta do servidor.
  res.end(html);
});

// Inicia o servidor na porta 3000.
server.listen(3000, () => {

  // Exibe uma mensagem no terminal informando que o servidor foi iniciado.
  console.log("Servidor: http://localhost:3000 está sendo executado meu chapa");
});
*/

import {createServer} from 'node:http'; // cria servidor
createServer(function (request, response){

console.log("toc toc ");
if(request.url !== "/health"){
    response.writeHead(404, { "content-type":"application/json"});
    response.end(JSON.stringify({message: "oRecurso não encontrado"}));
return;
}
response.writeHead(200, { "content-type":"application/json"});
response.end(JSON.stringify({status: "ok"}));

}).listen(3000);
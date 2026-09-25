import {createServer} from 'node:http'; // cria servidor
createServer(function (request, response){

console.log("toc toc ");
if(request.url !== "/health"){
    response.writeHead(404, { "content-type":"aplication/json"});
response.end(JSON.stringify({status: "ok"}));
return;
}
response.writeHead(200, { "content-type":"aplication/json"});
response.end(JSON.stringify({message: "Recurso não encontrado"}));

}).listen(3000);
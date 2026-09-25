import {createServer} from 'node:http'; // cria servidor
createServer(function (request, response){

console.log("toc toc ");
if(request.url !== "/api/health"){
    response.writeHead(404, { "content-type":"application/json"});
    response.end(JSON.stringify({message: "oRecurso não encontrado"}));
return;
}
response.writeHead(200, { "content-type":"application/json"});
response.end(JSON.stringify({status: "ok"}));

}).listen(3000);
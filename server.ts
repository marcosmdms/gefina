import {createServer} from 'node:http'; // cria servidor
import send from './send.ts';

createServer(function (request, response){

//console.log('toc toc ');
if(request.url !== '/api/health'){
    send(response, 404, {message: 'recurso não encontrado'})
}
send(response, 200, {status: 'ok'})


}).listen(3000);
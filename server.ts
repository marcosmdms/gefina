
import express from 'express';
import send from './send.ts';

const app = express();

app.use(function(request, response, next){
    console.log(request.method + '-' + request.url);
    next();

});

app.get('/api/health', function (request,response){
    //send(response, 200, {'status':'ok'});
    response.status(200).json({status:'ok'});
});
// middler - função intermediária
app.use(function (request, response){
    //send(response,404, {message: 'recurso não encontrado.'});
    response.status(404).json({message: 'Recurso não encontrado.'})
});

app.listen(3000);
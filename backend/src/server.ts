import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors({
    
}));
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname,'..', 'uploads')))

app.listen(3333);


















//  Rota: Endereço completo da requisiçãpo
//  Recurso: Qual a entidade estamos acessando do sistema

//  GET: Buscar uma ou mais informaçoes do back-end
//  POST: cria uma nova informaçaos do back-end
//  PUT: atualizar uma info existente no back end
//  DELETE: remover uma info do back end

//  Request Param: parametros que vem na propria rota que identificam um recurso
//  query param: parametro que vem na propria rota geralmente opcional para filtros paginação
//  Request body: parametro para criaçao e /atualização de informações

// Desistruturação do JS 
//short sintaxe

/* const users = [
    'Jorge',
    'Atila',
    'Gilba',
    'Gab'
];

app.get('/users', (request, response) => {
    //json
    const search = String(request.query.search);
    const filteredUser = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUser);

});

app.get('/users/:id', (request, response) =>{
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})


app.post('/users', (request, response) =>{
    const user ={
        name: 'Jorge',
        email: 'jorge@gmail.com'    
    }

    return response.json(users);
})
 */

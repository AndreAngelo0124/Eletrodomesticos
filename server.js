import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const database = new DatabaseMemory()
const server = fastify()

server.get('/', () => {
    return 'Rota padrão'
})

server.post('/geladeira', (request, reply) => {
// Acessando dados do corpo da requisição
    const {titulo, autor, npaginas} = request.body
// Exibindo dados
//    console.log(body)
   
    // return 'cadastrar'
    database.create({
         marca: marca,
        criador: criados,
        nportas: nportas,
    })

    return reply.status(201).send
})

server.get('/geladeira', (request) => {
    const search = request.query.search
    console.log(search)
    const geladeira = database.list(search)
    console.log(geladeira)
    return geladeira
})

server.put('/geladeira/:id', (request, reply) => {
    const geladeiraId = request.params.id
    const {marca, criador, nportas} = request.body
    const geladeira = database.update(geladeiraId, {
        marca: marca,
        criador: criador,
        nportas: nportas,
    })
    return reply.status(204).send()
})

server.delete('/geladeira/:id', (request, reply) => {
    const geladeiraId = request.params.id

    database.delete(geladeiraId)

    return reply.status(204).send()
}) 

server.listen({
    port: 3333,
})
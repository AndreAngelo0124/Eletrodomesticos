import { randomUUID } from "crypto"

export class DatabaseMemory{
#geladeira = new Map()

list(search){
    return Array.from(this.#geladeira.entries()).map((geladeiraArray) =>{
    // acessando primeira posição
        const id = geladeiraArray[0]
        const data = geladeiraArray[1]

        return{
            id,
            ...data
        }
    })
    .filter(geladeira => {
        if (search){
            return geladeira.marca.includes(search)
        }
        return true
    })
}
create(geladeira){
    const geladeiraId = randomUUID()
    this.#geladeira.set(geladeiraId, geladeira)
}
update(id, geladeira){
    this.#geladeira.set(id, geladeira)
}
delete(id, geladeira){
    this.#geladeira.delete(id, geladeira)
}
}
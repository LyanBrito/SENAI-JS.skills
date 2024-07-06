// HTTP
// - method HTTP
// - url

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso no back-end
// POST => Criar um recurso no back-end
// PUT => Editar/Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

function handleCep() {
    const cep = "https://viacep.com.br/ws/04815370/json/"
    fetch(cep)
        .then((response) => response.json())
        .then((data) => {
            console.log("retorno da api", data)
            console.log("rua", data.logadouro)
            console.log("bairro", data.bairro)
            console.log("UF", data.uf)
        })
        .catch((error) => console.error('deu errado', error))

        console.log("barro"),
        console.log("rua", data.logadouro),
        console.log("UF", data.uf)
    

}
handleCep()
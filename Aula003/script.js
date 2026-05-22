const botaoBuscar = document.querySelector("#btn-buscar")
const inputPokemon = document.querySelector("#pokemonInput")
const resultado = document.querySelector("#resultado")

 function getPokemonInput(){
    getPokemon(inputPokemon.value)
 }

async function getPokemon(pokemon) {
    try {
        resultado.innerHTML = "carregando..."
        const reposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)  
        const data = await reposta.json()

     renderizaPokemon(data)
    } catch (error) {
        resultado.innerHTML = "<p style='color: red;'>Pokémon não encontrado. Tente novamente!</p>"
    }
}

function renderizaPokemon(data){
    const {name,weight,height,types,sprites:{front_default}} = data
    const tipo = types[0].type.name 

     resultado.innerHTML = `
     <img src = "${front_default}" alt="imagem do ${name}">
     <h2>${name}</h2>
     <p>Peso:${weight}</p>
     <p>altura:${height}</p>
     <p>Tipo:${tipo}</p>
     `
}


botaoBuscar.addEventListener("click",  getPokemonInput)
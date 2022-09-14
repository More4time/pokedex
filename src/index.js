//Los fetch de lista de pokemones (cada 20), cada pokemon unico y su foto
console.log("probando probando")
const pokemonContainer = document.querySelector(".pokemon-container")
const $CARTA_PRINCIPAL = document.querySelector("#CARTA_PRINCIPAL")



const siguiente = document.querySelector("#siguiente");
const atras = document.querySelector("#atras");

const URL_API = `https://pokeapi.co/api/v2/pokemon/`


function traerPagina(idPagina){
    fetch(`${URL_API}?offset=${idPagina*20}&limit=20`)
    .then(r => r.json())
    .then((data) =>{muestraLos20PokemonesDeLaPagina((data))
            })
}

function traerPokemon(id){
    fetch(`${URL_API}${id}/`)
    .then(r => r.json())
    .then((data) =>{muestraPokemon((data))
            })
}



function muestraLos20PokemonesDeLaPagina(pagina){
    
    for(let i=0; i<20; i++){
    
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pokemon-container");
    
    
    

  

    const nombre = document.createElement("p")
    nombre.classList.add("nombre");
    nombre.textContent = (pagina.results[i].name)

    

    const fotoPokemon = document.createElement("img")
    fotoPokemon.classList.add("foto-container")
    fotoPokemon.setAttribute("src",`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`)

    
  
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(fotoPokemon)
    pokemonContainer.appendChild(tarjeta)

    //tarjeta.onclick = function() {console.log(nombre.textContent)};

    
    }


}

function muestraPokemon(pokemon){

    const $fotoPokemon = document.querySelector("#foto-pokemon")
    const $peso = document.querySelector("#peso")
    const $altura= document.querySelector("#altura")
    const $tipo = document.querySelector("#tipo")

    $fotoPokemon.setAttribute("src", pokemon.sprites.front_default)
    $peso.textContent = (`Peso: ${pokemon.weight/10}`)
    $altura.textContent = (`Altura: ${pokemon.height/10}`)
    $tipo.textContent = (`Tipo: ${pokemon.types[0].type.name.toUpperCase()} `)

   

    
}



function iniciar(){
    traerPagina(0)
    //traerPokemon(2)
   

}

 iniciar()

 pokemonContainer.onclick = function() {console.log("")};

//Los fetch de lista de pokemones (cada 20), cada pokemon unico y su foto
console.log("probando probando")
const pokemonContainer = document.querySelector(".pokemon-container")

const siguiente = document.querySelector("#siguiente");
const atras = document.querySelector("#atras");

const URL_API = `https://pokeapi.co/api/v2/pokemon/`


function traerPagina(idPagina){
    fetch(`${URL_API}?offset=${idPagina*20}&limit=20`)
    .then(r => r.json())
    .then((data) =>{mostrarListadoPagina((data))
            })
}

function traerPokemon(id){
    fetch(`${URL_API}${id}/`)
    .then(r => r.json())
    .then((data) =>{mostrarPokemon((data))
    console.log(data.sprites.front_default)
            })
}



function mostrarListadoPagina(pagina){
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

    tarjeta.onclick = function() {console.log(nombre.textContent)};
    }

}



function iniciar(){
    traerPagina(0)
    
    
}

 iniciar()

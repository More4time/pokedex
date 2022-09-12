//Los fetch de lista de pokemones (cada 20), cada pokemon unico y su foto

const pokemonContainer = document.querySelector(".pokemon-container")

const URL_API = `https://pokeapi.co/api/v2/pokemon/`


function fetchPokemon(idPagina){
    fetch(`${URL_API}?offset=${idPagina*20}&limit=20`)
    .then(r => r.json())
    .then((data) =>{crearPrimeros20Pokemones(data)
            })
}

function crearImagen(name){
    fetch(`${URL_API}${name}/`)
    .then(r => r.json())
    .then((data) =>{vincularPokemonConImagen(data)
            })
}

function vincularPokemonConImagen(nombrePokemon){
    const contenedorFoto = document.createElement("div")
    contenedorFoto.classList.add("foto-contenedor")

    const foto = document.createElement("img")
    foto.setAttribute.src = (pokemon.data.sprites.front_default)

    contenedorFoto.appendChild(foto)
    pokemonContainer.appendChild(contenedorFoto)
}




function crearPrimeros20Pokemones(pokemon){
    for(let i=0; i<20; i++){
    
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pokemon-container");

  

    const nombre = document.createElement("p")
    nombre.classList.add("nombre");
    nombre.textContent = (pokemon.results[i].name)

  

    tarjeta.appendChild(nombre)
    pokemonContainer.appendChild(tarjeta)
    }

}

function iniciar(){
    fetchPokemon(0)
    
    
}
iniciar()









/*function fetchPokemono(id){
    fetch(`${URL_API}${id}/`)
    .then(r => r.json())
    .then((data) =>{traerPrimeras20habilidades((data))
            })
}

function traerPrimeras20habilidades(pokemon){
        for(let i= 0; i<21; i++){
        
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("pokemon-tarjeta");
    
      
    
        const nombre = document.createElement("p")
        nombre.classList.add("nombre");
        nombre.textContent = JSON.stringify(pokemon.abilities[i])
    
    
        tarjeta.appendChild(nombre)
        
     
        
        pokemonContainer.appendChild(tarjeta)
    }
    }*/

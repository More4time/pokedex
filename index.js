    //Los fetch de lista de pokemones (cada 20), cada pokemon unico y su foto
    console.log("probando probando")
    const pokemonContainer = document.querySelector(".pokemon-container")
    const $CARTA_PRINCIPAL = document.querySelector("#CARTA_PRINCIPAL")
    const $atras = document.querySelector("#atras")
    const $siguiente = document.querySelector("siguiente")

    

    const URL_API = `https://pokeapi.co/api/v2/pokemon/`


    function traerPagina(){
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
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
        
        for(let i=0; i<1154; i++){
        
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("pokemon-container");
        tarjeta.setAttribute("id", i+1)

               

        const nombre = document.createElement("p")
        nombre.classList.add("nombre");
        nombre.textContent = (pagina.results[i].name)

        tarjeta.appendChild(nombre)
        pokemonContainer.appendChild(tarjeta)

     
        }
        }
   


        
    function muestraPokemon(pokemon){

        const $fotoPokemon = document.querySelector("#foto-pokemon")
        const $titulo = document.querySelector("#titulo")
        const $peso = document.querySelector("#peso")
        const $altura= document.querySelector("#altura")
        const $tipo = document.querySelector("#tipo")

        $fotoPokemon.setAttribute("src", pokemon.sprites.front_default)
        $titulo.textContent =(`${pokemon.name.toUpperCase()}`)
        $peso.textContent = (`Peso: ${pokemon.weight/10}`)
        $altura.textContent = (`Altura: ${pokemon.height/10}`)
        $tipo.textContent = (`Tipo: ${pokemon.types[0].type.name.toUpperCase()} `)
        
    }



   function iniciar(){
  
    

        traerPagina()
        pokemonContainer.onclick=(e)=>{ const pokemon = traerPokemon(e.target.id) }
    

    }


    iniciar()






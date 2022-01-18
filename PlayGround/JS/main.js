function PokeAPI (id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then ( res => res.json())
    .then (data => console.log(data));
}

function cantidadPokemons (pokemon){
    for (let i = 1; i <=pokemon; i++) {
        PokeAPI(i) 
    }
}

console.log(cantidadPokemons(500))
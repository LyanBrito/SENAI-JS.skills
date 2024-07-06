function handleRayquaza() {
    const pokemon = "https://pokeapi.co/api/v2/pokemon/rayquaza"
    fetch(pokemon)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("container").innerHTML = 
            `
            <div style="
            display:flex; 
            flex-direction: column;
            justify-content: center;
            align-items: center;
            ">
                <img src=${data.sprites.front_default} alt="rayqyasa-img">
                <p>${data.name}</p>
            </div>
            `
        }) 
        .catch((error) => console.error("Pokemo n encontrado", error))
}
handleRayquaza()
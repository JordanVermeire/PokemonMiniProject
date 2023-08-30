const pokeTypes = document.getElementById("poketypes");
const grass = document.getElementById("grass");
const fire = document.getElementById("fire");
const water = document.getElementById("water");



function colorByType (value) {
    console.log(value);
    switch(value) {
        case 'grass':
            pokeTypes.style.backgroundColor = "rgba(0, 255, 30, 0.804)";
            pokeTypes.style.color = "rgba(0, 0, 0)";
        break;
        case 'fire':
            pokeTypes.style.backgroundColor = "rgba(255, 51, 0, 0.804)";
            pokeTypes.style.color = "rgba(240, 248, 255)";
        break;
        case 'water':
            pokeTypes.style.backgroundColor = "rgba(0, 140, 255, 0.804)";
            pokeTypes.style.color = "rgba(240, 248, 255)";
        break;
        default:
            break;
    }
}

pokeTypes.onchange = function() {
    console.log("check me out");
    colorByType(pokeTypes.value);
  };


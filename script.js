// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})

async function fetchData(){

    try{
		const name = document.getElementById("name");
		const weight = document.getElementById("weight");
		const height = document.getElementById("height");
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
		

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
		
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
		
				imgElement.classList.remove("fade");
						name.classList.remove("fade");
		
		name.innerHTML = data.name;
		weight.innerHTML ="Weight: " + data.weight;
		height.innerHTML = "Height: " + data.height;
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
		
		/* name.classList.add("fade");
		imgElement.classList.add("fade"); */
		console.log(data);
    }
    catch(error){
		if(pokemonName.value === "")
        alert("Enter pokemon name");
		else
		alert("Could not find pokemon");
    }
}

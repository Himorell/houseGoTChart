const requestURL = "../json/characters.json";

//Llamada asíncrona: "espera que llegue todo antes de seguir"
async function fetchAllCharactersJson(){
    const response = await fetch(requestURL);
    const allCharacters = await response.json();
    return allCharacters;
}
//Si todo es correcto, vas a leer "allCharacters"
fetchAllCharactersJson().then(allCharacters =>{

    for (let index = 0; index < allCharacters.characters.length; index++){

        const charactersSection = document.getElementById('charactersSection');

        let characterName = allCharacters.characters[index].characterName;
        let houseName = allCharacters.characters[index].houseName;
        /* let houseName = allCharacters.characters[index].houseName['stark']; */
        let characterImageFull = allCharacters.characters[index].characterImageFull;
        let siblings = allCharacters.characters[index].siblings;

        charactersSection.innerHTML += `
            <div class="card" style="width: 6rem;">
                <img src="${characterImageFull}" alt="Imagen del personaje">
                <div class="card-body">
                    <h4 class="card-title">${characterName}</h3>
                </div>
            </div>
        `

        //console.log(allCharacters.characters[index].characters);

    };
})


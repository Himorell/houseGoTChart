const requestURL = "../json/characters.json";


async function fetchAllCharactersJson(){
    const response = await fetch(requestURL);
    const allCharacters = await response.json();
    return allCharacters;
}

fetchAllCharactersJson().then(allCharacters =>{

    for (let index = 0; index < allCharacters.characters.length; index++){

        const charactersSection = document.getElementById('charactersSection');

        let characterName = allCharacters.characters[index].characterName;
        let houseName = allCharacters.characters[index].houseName;
        let characterImageFull = allCharacters.characters[index].characterImageFull;

        charactersSection.innerHTML += `
            <div class="card ${houseName}" style="width: 6rem;">
                <img src="${characterImageFull}" alt="Imagen del personaje">
                <div class="card-body">
                    <h4 class="card-title">${characterName}</h3>
                </div>
            </div>
        `
    };
})

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

        /* let houseStark = allCharacters.characters[index].houseName['stark'];
        let houseTargaryen = allCharacters.characters[index].houseName['Targaryen'];
        let houseGreyjoy = allCharacters.characters[index].houseName['Greyjoy'];
        let houseFrey = allCharacters.characters[index].houseName['Frey']; */
        

        let characterName = allCharacters.characters[index].characterName;
        let houseName = allCharacters.characters[index].houseName;
        /* let houseName = allCharacters.characters[index].houseName['stark'];  */
        let characterImageFull = allCharacters.characters[index].characterImageFull;



        /* document.getElementById('North').onclick=function(){
            // Remove any element-specific value, falling back to stylesheets
            document.getElementById('stark').style.display='';
          }; */

    

        charactersSection.innerHTML += `
            <div class="card ${houseName}" style="width: 6rem;">
                <img src="${characterImageFull}" alt="Imagen del personaje">
                <div class="card-body">
                    <h4 class="card-title">${characterName}</h3>
                </div>
            </div>
        `
        //console.log(allCharacters.characters[index].characters)
    };
})



/* const targetDiv = document.getElementsByClassName("Greyjoy");
const btn = document.getElementsByClassName("Stark");
btn.onclick = function () {
    if (targetDiv.style.display !== "none"){
    targetDiv.style.display = "none";
    }
    if (targetDiv.style.display !== "none"){
    targetDiv.style.display = "block";
    }
}; */

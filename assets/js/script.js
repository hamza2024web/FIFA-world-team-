window.onload = function () {
    document.getElementById("form").style.display = "none";
};

function asd(a) {
    if (a === 1) {
        document.getElementById("form").style.display = "flex";
        document.getElementById('add-button').style.display = "none"
    } else {
        document.getElementById("form").style.display = "none";
    }
}

let switchSelect = document.getElementById("position");
switchSelect.addEventListener("change",switchBySelect);

function switchBySelect(e){
    console.log(e.target)
    if(e.target.value === "GK"){
        document.getElementById('inputs-gk').style.display = "flex";
    }
     else  {
        document.getElementById('inputs-rest').style.display = "flex";
    }
}



let allCards = [];
fetch('../../players.json')
.then((response) => response.json())
.then((data) =>{
    allCards = data.players;    
    displaycards(allCards);
})

function displaycards (cards){
    const allPlayers = document.getElementsByClassName('all-players');
    const cardsPlayer = Array.from(document.getElementsByClassName('card-player-all'));
    let arrayPlayer =  cards.map(player => {
        return player;
    })
        for (let i = 0; i < cardsPlayer.length; i++) {
            if (arrayPlayer[i].position === "GK"){
                cardsPlayer[i].innerHTML += `
                    <div class="card-image">
                        <div class="reting">
                            <p>${arrayPlayer[i].rating}</p>
                            <p>${arrayPlayer[i].position}</p>
                        </div>
                        <img src="${arrayPlayer[i].photo}" alt="${arrayPlayer[i].name}">
                        </div>
                        <div class="name">
                            ${arrayPlayer[i].name}
                        </div>
                    <div class="card-statics">
                        <div class="pace">
                            <p>DIV</p>
                            <p>${arrayPlayer[i].diving}</p>
                        </div>
                    <div class="shooting">
                            <p>HAN</p>
                            <p>${arrayPlayer[i].handling}</p>
                    </div>
                    <div class="passing">
                            <p>KICK</p>
                            <p>${arrayPlayer[i].kicking}</p>
                    </div>
                    <div class="dribbling">
                            <p>REF</p>
                            <p>${arrayPlayer[i].reflexes}</p>
                    </div>
                    <div class="defending">
                        <p>SPE</p>
                        <p>${arrayPlayer[i].speed}</p>
                    </div>
                    <div class="physical">
                        <p>POS</p>
                        <p>${arrayPlayer[i].positioning}</p>
                    </div>
                    </div>
                    <div class="card-team">
                        <img src="${arrayPlayer[i].flag}" alt="${arrayPlayer[i].nationality}">
                        <img src="${arrayPlayer[i].logo}" alt="${arrayPlayer[i].club}">
                    </div>
                    `   
                } else {
                cardsPlayer[i].innerHTML += `
                    <div class="card-image">
                        <div class="reting">
                        <p>${arrayPlayer[i].rating}</p>
                        <p>${arrayPlayer[i].position}</p>
                    </div>
                        <img src="${arrayPlayer[i].photo}" alt="${arrayPlayer[i].name}">
                        </div>
                    <div class="name">
                        ${arrayPlayer[i].name}
                    </div>
                    <div class="card-statics">
                        <div class="pace">
                        <p>PAC</p>
                        <p>${arrayPlayer[i].pace}</p>
                    </div>
                    <div class="shooting">
                        <p>SHOT</p>
                        <p>${arrayPlayer[i].shooting}</p>
                    </div>
                    <div class="passing">
                        <p>PAC</p>
                        <p>${arrayPlayer[i].passing}</p>
                    </div>
                    <div class="dribbling">
                        <p>DRI</p>
                        <p>${arrayPlayer[i].dribbling}</p>
                    </div>
                    <div class="defending">
                        <p>DEF</p>
                        <p>${arrayPlayer[i].defending}</p>
                    </div>
                    <div class="physical">
                        <p>PHY</p>
                        <p>${arrayPlayer[i].physical}</p>
                    </div>
                    </div>
                    <div class="card-team">
                        <img src="${arrayPlayer[i].flag}" alt="${arrayPlayer[i].nationality}">
                        <img src="${arrayPlayer[i].logo}" alt="${arrayPlayer[i].club}">
                    </div>
                ` 
                }
            }
    }

    const form = document.querySelector('#form');
    const dataArray = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const fd = new FormData(form);
        const imageFile = fd.get('image');
        const imageFile2 = fd.get('logo');
        const imageFile3 = fd.get('flag');
        const reader = new FileReader();

        reader.onload = function (event) {
            const selectValue = document.getElementById('position').value;
            const obj = {
                name: fd.get('name'),
                photo: event.target.result,
                position: selectValue,
                nationality: fd.get('nationality'),
                flag: event.target.result,
                club: fd.get('club'),
                logo: event.target.result,
                rating: fd.get('rating'),
                pace: fd.get('pace'),
                shooting: fd.get('shooting'),
                passing: fd.get('passing'),
                dribbling: fd.get('dribbling'),
                defending: fd.get('defending'),
                physical: fd.get('physical')
            };
            dataArray.push(obj);

            const ajoutCard = document.querySelector(".all-players");
            const cardPlayerAjout = document.createElement("card-player-all");
            cardPlayerAjout.className = "cardPlayerAjout";
            cardPlayerAjout.innerHTML =  `
                <div class="card-player-all"draggable="true">
                    <div class="card-image">
                        <div class="reting">
                        <p>${obj.rating}</p>
                        <p>${obj.position}</p>
                    </div>
                        <img src="${obj.photo}" alt="${obj.name}">
                        </div>
                    <div class="name">
                        ${obj.name}
                    </div>
                    <div class="card-statics">
                        <div class="pace">
                        <p>PAC</p>
                        <p>${obj.pace}</p>
                    </div>
                    <div class="shooting">
                        <p>SHOT</p>
                        <p>${obj.shooting}</p>
                    </div>
                    <div class="passing">
                        <p>PAC</p>
                        <p>${obj.passing}</p>
                    </div>
                    <div class="dribbling">
                        <p>DRI</p>
                        <p>${obj.dribbling}</p>
                    </div>
                    <div class="defending">
                        <p>DEF</p>
                        <p>${obj.defending}</p>
                    </div>
                    <div class="physical">
                        <p>PHY</p>
                        <p>${obj.physical}</p>
                    </div>
                    </div>
                    <div class="card-team">
                        <img src="${obj.flag}" alt="${obj.nationality}">
                        <img src="${obj.logo}" alt="${obj.club}">
                    </div>
                </div>

            `;
            ajoutCard.appendChild(cardPlayerAjout);
            document.getElementById("form").style.display = "none";
            form.reset();
        };
        if (imageFile) {
            reader.readAsDataURL(imageFile);
        } else {
            alert('Please select an image to upload.');
        }
    });

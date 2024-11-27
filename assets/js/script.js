window.onload = function () {
    document.getElementById("form").style.display = "none";
};

function asd(a) {
    if (a === 1) {
        document.getElementById("form").style.display = "grid";
    } else {
        document.getElementById("form").style.display = "none";
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

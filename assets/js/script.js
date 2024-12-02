window.onload = function () {
    document.getElementById("form").style.display = "none";
};

function asd(a) {
    if (a === 1) {
        document.getElementById("form").style.display = "flex";
    } else {
        document.getElementById("form").style.display = "none";
    }
}


let switchSelect = document.getElementById("position");
switchSelect.addEventListener("change",switchBySelect);

function switchBySelect(e){
    if(e.target.value === "GK"){
        document.getElementById('inputs-gk').style.display = "flex";
        document.getElementById('inputs-rest').style.display = "none";
    }
     else  {
        document.getElementById('inputs-rest').style.display = "flex";
        document.getElementById('inputs-gk').style.display = "none"
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
    const cardsPlayer = Array.from(document.getElementsByClassName('card-player-all-players'));
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
        const logoFile = fd.get('logo');
        const flagFile = fd.get('flag');
        const reader1 = new FileReader();
        const reader2 = new FileReader();
        const reader3 = new FileReader();

        reader1.onload = function (event1) {
            reader2.onload = function (event2){
                reader3.onload = function (event3){
                    const selectValue = document.getElementById('position').value;
                    const obj = {
                        name: fd.get('name'),
                        photo: event1.target.result,
                        position: selectValue,
                        nationality: fd.get('nationality'),
                        flag: event2.target.result,
                        club: fd.get('club'),
                        logo: event3.target.result,
                        rating: fd.get('rating'),
                        pace: fd.get('pace'),
                        shooting: fd.get('shooting'),
                        passing: fd.get('passing'),
                        dribbling: fd.get('dribbling'),
                        defending: fd.get('defending'),
                        physical: fd.get('physical'),
                        diving: fd.get('diving'),       
                        handling: fd.get('handling'),   
                        kicking: fd.get('kicking'),      
                        reflexes: fd.get('reflexes'),    
                        speed: fd.get('speed'),         
                        positioning: fd.get('positioning')
                    };
                    dataArray.push(obj);
        
                    const ajoutCard = document.querySelector(".all-players");
                    const cardPlayerAjout = document.createElement("card-player-all-players");
                    // cardPlayerAjout.className = "cardPlayerAjout";
                    cardPlayerAjout.innerHTML =  `
                        <div class="card-player" draggable="true">
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
                            <button class="delete-btn">Supprimer</button>
                        </div>
        
                    `;
                    ajoutCard.appendChild(cardPlayerAjout);
                    const deleteBtn = cardPlayerAjout.querySelector('.delete-btn');
                    deleteBtn.addEventListener('click', () => {
                    cardPlayerAjout.remove(); 
                    });
                    document.getElementById("form").style.display = "none";
                    form.reset();
                }
            }
        };
        if (imageFile) {
            reader1.readAsDataURL(imageFile);
        } else {
            alert('Please select an image to upload.');
        }

        if (logoFile){
            reader2.readAsDataURL(logoFile);
        } else {
            alert('please select an image to upload.');
        }

        if (flagFile){
            reader3.readAsDataURL(flagFile);
        } else {
            alert('please select an image to upload.')
        }
        
        if (!formValid(fd)) {
            return; 
        }
    });

    function formValid(fd) {
        
        let isValid = true;
    
        if (!fd.get('name') || fd.get('name').trim() === '') {
            alert("The input name is required.");
            isValid = false;
        } else if (fd.get('name').length > 50) {
            alert("The input name must be less than 50 characters.");
            isValid = false;
        }
    
        if (!fd.get('nationality') || fd.get('nationality').trim() === '') {
            alert("The input nationality is required.");
            isValid = false;
        }
    
        if (!fd.get('club') || fd.get('club').trim() === '') {
            alert("The input club is required.");
            isValid = false;
        }
    
        if (fd.get('position') === 'GK') {
            isValid &= validateNumber(fd.get('diving'), 10, 99, "diving");
            isValid &= validateNumber(fd.get('handling'), 10, 99, "handling");
            isValid &= validateNumber(fd.get('kicking'), 10, 99, "kicking");
            isValid &= validateNumber(fd.get('reflexes'), 10, 99, "reflexes");
            isValid &= validateNumber(fd.get('speed'), 10, 99, "speed");
            isValid &= validateNumber(fd.get('positioning'), 10, 99, "positioning");
        } else {
            isValid &= validateNumber(fd.get('rating'), 10, 99, "rating");
            isValid &= validateNumber(fd.get('pace'), 10, 99, "pace");
            isValid &= validateNumber(fd.get('shooting'), 10, 99, "shooting");
            isValid &= validateNumber(fd.get('passing'), 10, 99, "passing");
            isValid &= validateNumber(fd.get('dribbling'), 10, 99, "dribbling");
            isValid &= validateNumber(fd.get('defending'), 10, 99, "defending");
            isValid &= validateNumber(fd.get('physical'), 10, 99, "physical");
        }
    
        return isValid;
    }

    function validateNumber(value, min, max, fieldName) {
        const number = parseInt(value);
        if (isNaN(number) || number < min || number > max) {
            alert(`The input ${fieldName} must be a number between ${min} and ${max}.`);
            return false;
        }
        return true;
    }


document.addEventListener('DOMContentLoaded', () => {
    const draggableItems = document.querySelectorAll('.card-player');
    const dropZones = document.querySelectorAll('.substition, .attack, .milieu, .deffence, .goal-keaper');

    draggableItems.forEach(item => {
        item.addEventListener('dragstart', () => {
            item.classList.add('dragging'); 
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging'); 
        });
    });


    dropZones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault(); 
            const draggingItem = document.querySelector('.dragging');
            
            if (draggingItem) {
                zone.classList.add('hovered'); 
            }
        });
        zone.addEventListener('drop', e => {
            e.preventDefault(); 
            const draggingItem = document.querySelector('.dragging');

            if (draggingItem) {
                
                const targetCard = e.target.closest('.card-player'); 

                if (targetCard) {
                    targetCard.appendChild(draggingItem);
                } else {
                    zone.appendChild(draggingItem); 
                }
            }

            zone.classList.remove('hovered');
        });
    });
});
draggingElements();

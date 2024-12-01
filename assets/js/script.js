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

        formValid();

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
                        physical: fd.get('physical')
                    };
                    dataArray.push(obj);
        
                    const ajoutCard = document.querySelector(".all-players");
                    const cardPlayerAjout = document.createElement("card-player-all-players");
                    cardPlayerAjout.className = "cardPlayerAjout";
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
                        </div>
        
                    `;
                    ajoutCard.appendChild(cardPlayerAjout);
                    document.getElementById("form").style.display = "none";
                    form.reset();
                    draggingElements();
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
    });

    function formValid (){
        const formInput = document.querySelector('#form');
        const fv = new FormData(formInput);

        if (fv.get('name') === '' || fv.get('name') === null){
            alert("The input name is required");
        }
        if (fv.get('name').length > 50){
            alert("the input name must be less than 50 caractere")
        }
        if (fv.get('nationality') === '' || fv.get('nationality') === null){
            alert("the input nationality is rquired");
        }
        if (fv.get('club') === '' || fv.get('club') === null){
            alert("the input club is required");
        }

        const rating = parseInt(fv.get('rating'));
        if (isNaN (rating) < 10 || isNaN (rating)>100 ){
            alert("the input rating must be between 10 and 99");
        }
        const diving = parseInt(fv.get('diving'));
        if (isNaN (diving) < 10 || isNaN (rating) >100){
            alert("the input diving must be between 10 and 99");
        }
        const handling = parseInt(fv.get('handling'));
        if (isNaN (handling) < 10 || isNaN (handling) >100){
            alert("the input handling must be between 10 and 99");
        }
        const kicking = parseInt(fv.get('kicking'));
        if (isNaN (kicking) < 10 || isNaN (kicking) >100){
            alert("the input kicking must be between 10 and 99");
        }
        const reflexes = parseInt(fv.get('reflexes'));
        if (isNaN (reflexes) < 10 || isNaN (reflexes) >100){
            alert("the input reflexes must be between 10 and 99");
        }
        const speed = parseInt(fv.get('speed'));
        if (isNaN (speed) < 10 || isNaN (speed) >100){
            alert("the input speed must be between 10 and 99");
        }
        const positioning = parseInt(fv.get('positioning'));
        if (isNaN (positioning) < 10 || isNaN (positioning) >100){
            alert("the input positioning must be between 10 and 99");
        }
        const pace = parseInt(fv.get('pace'));
        if (isNaN (pace) < 10 || isNaN (pace) >100){
            alert("the input pace must be between 10 and 99");
        }
        const shooting = parseInt(fv.get('shooting'));
        if (isNaN (shooting) < 10 || isNaN (shooting) >100){
            alert("the input shooting must be between 10 and 99");
        }
        const passing = parseInt(fv.get('passing'));
        if (isNaN (passing) < 10 || isNaN (passing) >100){
            alert("the input passing must be between 10 and 99");
        }
        const dribbling = parseInt(fv.get('dribbling'));
        if (isNaN (dribbling) < 10 || isNaN (dribbling) >100){
            alert("the input dribbling must be between 10 and 99");
        }
        const defending = parseInt(fv.get('defending'));
        if (isNaN (defending) < 10 || isNaN (defending) >100){
            alert("the input defending must be between 10 and 99");
        }
        const physical = parseInt(fv.get('physical'));
        if (isNaN (physical) < 10 || isNaN (physical) >100){
            alert("the input physical must be between 10 and 99");
        }
    }


document.addEventListener('DOMContentLoaded', () => {
    const draggableItems = document.querySelectorAll('.card-player');
    const dropZones = document.querySelectorAll('.substition, .attack, .milieu, .deffence, .goal-keaper');

    // Handle drag start
    draggableItems.forEach(item => {
        item.addEventListener('dragstart', () => {
            item.classList.add('dragging'); // Mark as dragging
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging'); // Remove dragging mark
        });
    });

    // Handle drag over and drop
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault(); // Allow drop
            const draggingItem = document.querySelector('.dragging');
            
            if (draggingItem) {
                // Highlight the drop zone or placeholder (optional)
                zone.classList.add('hovered'); 
            }
        });
        zone.addEventListener('drop', e => {
            e.preventDefault(); // Prevent default drop behavior
            const draggingItem = document.querySelector('.dragging');

            if (draggingItem) {
                // Add the dragged item into the drop zone
                const targetCard = e.target.closest('.card-player'); // Check if dropping into another card

                if (targetCard) {
                    targetCard.appendChild(draggingItem);
                } else {
                    zone.appendChild(draggingItem); // Otherwise, append to the zone
                }
            }

            // Remove highlight after drop
            zone.classList.remove('hovered');
        });
    });
});




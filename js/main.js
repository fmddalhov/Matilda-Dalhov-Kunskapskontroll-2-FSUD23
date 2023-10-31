const saveContactBtn = document.getElementById('save-btn');
const nameInput = document.getElementById('add-name');
const numberInput = document.getElementById('add-number');
const deleteAllbtn = document.getElementById('delete-all-btn');

function saveInputValueBtnClick () {
    const name = nameInput.value;
    const number = numberInput.value;

    if (name.trim() === '' || number.trim() === '') {
        return displayFirstError();
    }
    createListItem(name, number);
    var audio = new Audio('sounds/swipe-sound-effect.mp3');
    audio.play();

    clearInputFields();
};
saveContactBtn.addEventListener('click', saveInputValueBtnClick);

function deleteAllContactBtnClick () {
    const userConfirmed = window.confirm('Är du säker på att du vill radera alla kontakter?');
    if (userConfirmed) {
    document
        .querySelectorAll('.contact-list li')
        .forEach((element) => element.remove());
        var audio = new Audio('sounds/halloween-pipe-organ-sound-clip.mp3');
        audio.play();
        setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;}
        , 5600);
    }
}
deleteAllbtn.addEventListener('click', deleteAllContactBtnClick);

function clearInputFields() {
    nameInput.value = '';
    numberInput.value = '';
}

function createListItem(name, number) {
    const list = document.querySelector('div.contact-list ul');
    const listItem = document.createElement('li');
    const listNameInput = document.createElement('input');
    listNameInput.type = 'text';
    listNameInput.value = name;
    listNameInput.disabled = true;

    const listNumberInput = document.createElement('input');
    listNumberInput.type = 'text';
    listNumberInput.value = number;
    listNumberInput.disabled = true;

    const changeItemBtn = document.createElement('button');
    changeItemBtn.textContent = 'Ändra';
    changeItemBtn.classList.add('change-btn');

function changeInputValueBtnClick () {
    if (listNameInput.disabled) {
            changeItemBtn.textContent = 'Spara';
            var audio = new Audio('sounds/creaking-sound-effect.mp3');
            audio.play();
        } else {
            if (listNameInput.value.trim() === '' || listNumberInput.value.trim() === '') {
                displaySecondError();
                return;
            }
            changeItemBtn.textContent = 'Ändra';  
        }
        listNameInput.disabled = !listNameInput.disabled;
        listNumberInput.disabled = !listNumberInput.disabled;
    }
changeItemBtn.addEventListener('click', changeInputValueBtnClick);

const deleteItemBtn = document.createElement('button');
deleteItemBtn.textContent = 'Radera';
deleteItemBtn.classList.add('delete-btn');

function deleteListItem() {
var audio = new Audio('sounds/free-whoosh-sound-effect.mp3');
audio.play();
    if (listItem) {
        listItem.remove();
    }
}
deleteItemBtn.addEventListener('click', deleteListItem);

    listItem.appendChild(listNameInput);
    listItem.appendChild(listNumberInput);
    listItem.appendChild(changeItemBtn);
    listItem.appendChild(deleteItemBtn);
    list.appendChild(listItem);
}

function displayFirstError() {
  let outerBoxFirstError = document.createElement('div');
  outerBoxFirstError.className = "first-outer-box";

  let firstErrorMessage = document.createElement('div');
  firstErrorMessage.className = "first-error";
  firstErrorMessage.innerHTML = `
  <b>Du kan inte spara en tom kontakt!</b>			
  `;
  const spiderImg = document.createElement('img');
  spiderImg.src = 'img/spider-7425947_1280.png';
  firstErrorMessage.appendChild(spiderImg);
  document.getElementById('first-section').appendChild(firstErrorMessage);
  var audio = new Audio('sounds/male-laugh-horror-sound-effect.mp3');
  audio.play();

  firstErrorMessage.addEventListener('click', function(e) {
    e.target.parentNode.remove();
  });

  setTimeout(() => firstErrorMessage.remove(), 3000);
}

function displaySecondError() {
    let outerBoxSecondError = document.createElement('div');
    outerBoxSecondError.className = "second-outer-box";
  
    let secondErrorMessage = document.createElement('div');
    secondErrorMessage.className = "second-error";
    secondErrorMessage.innerHTML = `
    <b>Du kan inte spara tomma ändringar!</b>			
    `;
    const ghostImg = document.createElement('img');
    ghostImg.src = 'img/ghosts-1775548_1280.png';
    secondErrorMessage.appendChild(ghostImg);
    document.getElementById('second-section').appendChild(secondErrorMessage);
    var audio = new Audio('sounds/male-laugh-horror-sound-effect.mp3');
    audio.play();

    secondErrorMessage.addEventListener('click', function(e) {
      e.target.parentNode.remove();
    });
  
    setTimeout(() => secondErrorMessage.remove(), 3000);
  }

const changeThemeBtn = document.getElementById('change-theme-btn');
changeThemeBtn.addEventListener('click', function () {
    displayUnderConstruction();
});

function displayUnderConstruction() {
    let constructionBox = document.createElement('div');
    var audio = new Audio('sounds/building-construction-sound-effect.mp3');
    audio.play();
    constructionBox.className = 'construction-box';
    constructionBox.innerHTML = `
    <b>Under konstruktion! <br>Nya teman kommer inom kort!</b>
    `;

    document.body.appendChild(constructionBox);
    constructionBox.addEventListener('click', function(e) {
        e.target.remove();
      });
    
    setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;    
    constructionBox?.remove() }
    , 3000);
}
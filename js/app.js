'use strict';

let leftImageElement = document.getElementById('left-image');
let middleImageElement = document.getElementById('middle-image');
let rightImageElement = document.getElementById('right-image');

let max = 25;
let userAttemptsCounter = 0;
let goats = [];
let leftImageIndex;
let middleImageIndex;
let rightImageIndex;
Goat.all = [];

function Goat(name, src) {
    this.name = name;
    this.source = src;
    this.votes = 0;
    this.shown = 0;
    goats.push(this);
    Goat.all.push(this);
}



new Goat('bag', 'img/bag.jpg');
new Goat('banana', 'img/banana.jpg');
new Goat('bathroom', 'img/bathroom.jpg');
new Goat('boots', 'img/boots.jpg');
new Goat('breakfast', 'img/breakfast.jpg');
new Goat('bubblegum', 'img/bubblegum.jpg');
new Goat('chair', 'img/chair.jpg');
new Goat('cthulhu', 'img/cthulhu.jpg');
new Goat('dog-duck', 'img/dog-duck.jpg');
new Goat('dragon', 'img/dragon.jpg');
new Goat('pen', 'img/pen.jpg');
new Goat('pet-sweep', 'img/pet-sweep.jpg');
new Goat('scissors', 'img/scissors.jpg');
new Goat('shark', 'img/shark.jpg');
new Goat('sweep', 'img/sweep.png');
new Goat('tauntaun', 'img/tauntaun.jpg');
new Goat('unicorn', 'img/unicorn.jpg');
new Goat('water-can', 'img/water-can.jpg');
new Goat('wine-glass', 'img/wine-glass.jpg');

function getRandomIndex() {

    return Math.floor(Math.random() * goats.length);
}

function renderDivImages() {

    leftImageIndex = getRandomIndex();
    middleImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();

    while (leftImageIndex === rightImageIndex || middleImageIndex === leftImageIndex || middleImageIndex === rightImageIndex) {
        rightImageIndex = getRandomIndex();
        middleImageIndex = getRandomIndex();

    }

    leftImageElement.src = goats[leftImageIndex].source;

    middleImageElement.src = goats[middleImageIndex].source;

    rightImageElement.src = goats[rightImageIndex].source;
    Goat.all[leftImageIndex].shown++;
    Goat.all[middleImageIndex].shown++;
    Goat.all[rightImageIndex].shown++;

}

renderDivImages();

let imagesDiv = document.getElementById('images-div');

imagesDiv.addEventListener('click', userClick);

function userClick(event) {
    userAttemptsCounter++;

    if (userAttemptsCounter < max) {

        if (event.target.id === 'left-image') {

            goats[leftImageIndex].votes++;

        } else if (event.target.id === 'middle-image') {

            goats[middleImageIndex].votes++;
         
        } else if (event.target.id === 'right-image') {

            goats[rightImageIndex].votes++;
           

        } else {
            alert('Plase Click in imges');
        }

        renderDivImages();
    } else {


        let button = document.createElement("button");
        button.innerHTML = "show reslt";
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(button);
        button.addEventListener('click', showResult);

        function showResult(event) {
            let list = document.getElementById('results-list');

            for (let i = 0; i < goats.length; i++) {

                let listItem = document.createElement('li');

                list.appendChild(listItem);

                listItem.textContent = `${goats[i].name} has ${goats[i].votes} votes and was seen${goats[i].shown}`;
                button.removeEventListener('click', showResult);
            }
        }
        imagesDiv.removeEventListener('click', userClick);

    }

}
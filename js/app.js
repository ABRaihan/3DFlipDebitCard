'use strict';
const card = document.querySelector('.card');
const front = document.querySelector('.card .front');
const back = document.querySelector('.card .back');
let degree = 0;
card.addEventListener('click', function (e) {
    cyclicalEffect()
});

function cyclicalEffect() {
    front.style.transform = `rotateY(${180 + degree}deg)`;
    back.style.transform = `rotateY(${360 + degree}deg)`;
    degree += 180;
}

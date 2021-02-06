'use strict';
const card = document.querySelector('.card');
const front = document.querySelector('.card .front');
const back = document.querySelector('.card .back');

card.addEventListener('click', function (e) {
    if (front.style.transform === '') {
        front.style.transform = 'rotateY(180deg)';
        back.style.transform = 'rotateY(360deg)';
    } else {
        front.style.transform = '';
        back.style.transform = '';
    }
});

'use strict';

const share = document.querySelector('.share');
const shareBox = document.querySelector('.share-box');
const shareBoxTr = document.querySelector('.triangle');

let state = 0;

share.addEventListener(
    'click', () => {
        if(state == 0) {
            state = 1;
            shareBox.classList.remove('hidden');
            shareBoxTr.classList.remove('hidden');
            share.classList.remove('share-not-active');
            share.classList.add('share-active')
        }
        else {
            state = 0;
            shareBox.classList.add('hidden');
            shareBoxTr.classList.add('hidden');
            share.classList.remove('share-active');
            share.classList.add('share-not-active')
        }
    }
)

// ==UserScript==
// @name         AniList to Because.moe
// @namespace    https://github.com/uptimeZERO/OtakuScripts
// @version      0.1.1
// @author       github.com/uptimeZERO
// @include      https://anilist.co/anime/*
// @include      https://www.anilist.co/anime/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.includes('https://anilist.co/anime/')) {
        let divs = document.querySelectorAll('div.type');
        let enlishName;
        for (let i = 0; i < divs.length; i++) {
            if (divs[i].innerHTML == 'English') {
                englishName = divs[i].parentNode.lastChild.innerHTML;
                console.error('LastChild inner -> ' + englishName);
            }
        }

        if (englishName.includes('Season ')) {
            englishName = englishName.substring(0, (cunt.length - 9)); 
        }
        
        let whereToStream = document.createElement('div');
        whereToStream.classList.add('external-link');
        whereToStream.innerHTML = '<a class="external-link" href="https://because.moe/uk?q=' + englishName.replace('!', ' ').replace('?', ' ') + '" target="_blank">Where to stream?</a>';

        divs = document.querySelectorAll('div.actions');
        console.error(divs.length);
        for (let i = 0; i < divs.length; i++) {
            if (divs[i].innerHTML == 'English') {
                englishName = divs[i].parentNode.lastChild.innerHTML;
                console.error('LastChild inner -> ' + englishName);
            }
        }















        let button = '<a class="external-link" target="_blank" href="link">Where to stream?</a>';

        let parentElement = document.getElementById('profileRows').
        parentElement.insertBefore(whereToStream, parentElement.children[1]);


        let cunt = 'Re:ZERO -Starting Life in Another World- Season 2';
        console.error(cunt.substring(0, (cunt.length - 9)));

    }
});
// ==UserScript==
// @name         Funimation link to MAL
// @namespace    https://github.com/uptimeZERO/OtakuScripts
// @version      0.1.1
// @author       github.com/uptimeZERO
// @include      https://www.funimation.com/shows/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.includes('https://www.funimation.com/shows/')) {
        let nameHeader = document.querySelector('h1.heroTitle');
        let malElement = document.createElement('div');
        malElement.classList.add('show-detail-btn');
        let buttonParent = document.querySelector('div.show-detail-btn').parentElement;
        if (nameHeader != undefined) {
            let name = nameHeader.innerHTML;
            malElement.innerHTML = '<a style="margin-top:5px;" class="btn" href="https://myanimelist.net/anime.php?q=' + name.replace('!', ' ').replace('?', ' ') + '" target="_blank">MyAnimeList</a>';
            buttonParent.appendChild(malElement);
        }
        let imgLogo = document.querySelector('img.show-detail-logo');
        if (imgLogo != undefined) {
            let name = imgLogo.title;
            malElement.innerHTML = '<a style="margin-top:5px;" class="btn" href="https://myanimelist.net/anime.php?q=' + name.replace('!', ' ').replace('?', ' ') + '" target="_blank">MyAnimeList</a>';
            buttonParent.appendChild(malElement);
        }
    }
});
// ==UserScript==
// @name         MAL to Because.moe
// @version      1
// @description  To add a URL from MAL to Because.moe for easy legal viewing
// @author        Pav
// @include       http://www.myanimelist.net/anime/*
// @include       https://www.myanimelist.net/anime/*
// @include       http://*.www.myanimelist.net/anime/*
// @include       https://*.www.myanimelist.net/anime/*
// @include       http://*.myanimelist.net/anime/*
// @include       http://myanimelist.net/anime/*
// @include       https://*.myanimelist.net/anime/*
// @include       https://myanimelist.net/anime/*
// @run-at        document-start
// @grant       none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.includes('https://myanimelist.net/anime/')) {
        let englishNameSpan = document.querySelector('span.title-english');
        let nameSpan = document.querySelector('span[itemprop="name"]');
        let japaneseName = nameSpan.innerHTML;
        let whereToStream = document.createElement('div');
        whereToStream.classList.add('di-b');
        whereToStream.classList.add('mt4');
        whereToStream.classList.add('mb16');
        whereToStream.classList.add('ac');
        if (englishNameSpan != undefined) {
            let englishName = englishNameSpan.innerHTML;
            whereToStream.innerHTML = '<a class="left-info-block-manga-store-button" href="https://because.moe/uk?q=' + englishName.replace('!', ' ').replace('?', ' ') + '" target="_blank">Where to stream?</a>';
        } else {
            whereToStream.innerHTML = '<a class="left-info-block-manga-store-button" href="https://because.moe/uk?q=' + japaneseName.replace('!', ' ').replace('?', ' ') + '" target="_blank">Where to stream?</a>';
        }

        let parentElement = document.getElementById('profileRows').parentElement;
        parentElement.insertBefore(whereToStream, parentElement.children[1]);
    }
});
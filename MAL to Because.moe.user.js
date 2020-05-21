// ==UserScript==
// @name         MAL to Because.moe
// @namespace    https://github.com/uptimeZERO/OtakuScripts
// @version      0.1.1
// @author        github.com/uptimeZERO
// @include       https://myanimelist.net/anime/*
// @include       https://www.myanimelist.net/anime/*
// @grant       none
// @run-at        document-start
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
// ==UserScript==
// @name         HiDive to MAL
// @namespace    https://github.com/uptimeZERO/OtakuScripts
// @version      0.1.1
// @author       github.com/uptimeZERO
// @include      https://www.hidive.com/tv/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.includes('https://www.hidive.com/tv/')) {
        let malElement = document.createElement('a');
        let existingMalImg = document.querySelector('img[src="//d10xkldqejj5hr.cloudfront.net/logo/mal-logo-blue2.png"]');
        let animePage = document.querySelector('span[style="vertical-align:middle;"]').children[0].href;
        let newMalImg = '<img src="//d10xkldqejj5hr.cloudfront.net/logo/mal-logo-blue2.png" class="img-fluid" style="max-width:100px;vertical-align:middle;margin-right:5px;border-radius:3px;">';
        malElement.href = animePage;
        malElement.target = '_blank';
        malElement.innerHTML = newMalImg;
        let parentElement = existingMalImg.parentElement;
        parentElement.replaceChild(malElement, existingMalImg);
    }
});
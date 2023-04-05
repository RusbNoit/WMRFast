// ==UserScript==
// @name         youtube_autoplay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

function videoSurfStage2()
{

    var btmMute = document.getElementsByClassName("ytp-mute-button").item(0);
    var btnPlay = document.getElementsByClassName("ytp-play-button").item(0);


    console.log("Stage 2 Start");

    if( btmMute.title == 'Отключение звука (m)') {
        console.log("Stage 2 Mute Sound");
        btmMute.click();
    }
    if( btnPlay.title == 'Смотреть (k)') {
        console.log("Stage 2 Start play");
        btnPlay.click();
    }

    console.log("Stage 2 End")
}


function videoSurfStage1()
{
    console.log("Stage 1 overlay start");
    document.getElementsByClassName("ytp-cued-thumbnail-overlay").item(0).click();
    //document.getElementsByClassName("ytp-cued-thumbnail-overlay").item(0).focus();
    console.log("Stage 1 overlay end");
    setTimeout(videoSurfStage2, 3000);
}

    setTimeout(videoSurfStage1, 5000);
    // Your code here...
})();
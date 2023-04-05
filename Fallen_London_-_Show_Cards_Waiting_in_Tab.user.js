// ==UserScript==
// @name Fallen London - Show Cards Waiting in Tab
// @namespace Fallen London - Show Cards Waiting in Tab
// @author Laurvin
// @description Shows the number of cards waiting in the page title/tab instead of the default: "Fallen London".
// @version 3.0.1
// @icon http://i.imgur.com/XYzKXzK.png
// @downloadURL https://github.com/Laurvin/Fallen-London---Show-Cards-Waiting-in-Tab/raw/master/Fallen_London_-_Show_Cards_Waiting_in_Tab.user.js
// @updateURL https://github.com/Laurvin/Fallen-London---Show-Cards-Waiting-in-Tab/raw/master/Fallen_London_-_Show_Cards_Waiting_in_Tab.user.js
// @match https://fallenlondon.com/*
// @match https://www.fallenlondon.com/*
// @grant none
// @run-at document-idle
// ==/UserScript==

(function() {
    'use strict';

    let currentCardCount = -1;
    let titleIntervalId = null;

    function updateTitle()
    {
        const cardCountSpan = document.querySelector(".deck-info span");
        if (cardCountSpan)
        {
            const cardCount = cardCountSpan.innerText;
            if (cardCount !== currentCardCount) {
                currentCardCount = cardCount;
            }
        }
        else
        {
            currentCardCount = "No deck found!";
        }
        document.title = `${currentCardCount}`;
    }

    // Update the page title once when the page has loaded.
    updateTitle();

    // Check for updates to the card count every 20 seconds.
    titleIntervalId = setInterval(updateTitle, 20000);
})();

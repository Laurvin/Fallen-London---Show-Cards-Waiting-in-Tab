// ==UserScript==
// @name Fallen London - Show Cards Waiting in Tab
// @namespace Fallen London - Show Cards Waiting in Tab
// @author Laurvin
// @description Shows the number of cards waiting in the page title/tab instead of the default: "Fallen London".
// @version 3.6
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
    let currentActions = -1;
    let titleIntervalId = null;

    function updateTitle() {
        const cardSpan = document.querySelector(".deck-info__cards-in-deck span");

        if (cardSpan) {
            const ariaLabel = cardSpan.getAttribute("aria-label");
            const textToParse = ariaLabel ? ariaLabel : cardSpan.innerText.trim();
            let n = 0;

            if (textToParse === "No cards waiting.") {
                n = 0;
            } else if (textToParse === "No draw limit.") {
                n = "∞";
            } else {
                const match = textToParse.match(/\d+/);
                if (match) {
                    n = match[0];
                }
            }

            let cardString = n + " cards";
            if (n == 10) {
                cardString += "!!";
            }

            if (cardString !== currentCardCount) {
                currentCardCount = cardString;
            }
        } else {
            currentCardCount = "No deck found!";
        }

        const ActionsDiv = document.querySelector(".item__value");

        if (ActionsDiv) {
            let Actions = ActionsDiv.innerText;

            if (Actions !== currentActions) {
                currentActions = Actions;
            }
            if (currentActions == "40/40") {
                currentActions = "!!" + currentActions + "!!";
            }
        } else {
            currentActions = "!";
        }

        const Title = currentCardCount + " | " + currentActions;
        document.title = Title;
    }

    updateTitle();

    titleIntervalId = setInterval(updateTitle, 20000);
})();

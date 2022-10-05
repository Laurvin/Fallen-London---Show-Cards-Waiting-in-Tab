// ==UserScript==
// @name Fallen London - Show Cards Waiting in Tab
// @namespace Fallen London - Show Cards Waiting in Tab
// @author Laurvin
// @description Shows the number of cards waiting in the page title/tab instead of the default: "Fallen London".
// @version 2.1.1
// @icon http://i.imgur.com/XYzKXzK.png
// @downloadURL https://github.com/Laurvin/Fallen-London---Show-Cards-Waiting-in-Tab/raw/master/Fallen_London_-_Show_Cards_Waiting_in_Tab.user.js
// @updateURL https://github.com/Laurvin/Fallen-London---Show-Cards-Waiting-in-Tab/raw/master/Fallen_London_-_Show_Cards_Waiting_in_Tab.user.js
// @match https://fallenlondon.com/
// @match https://www.fallenlondon.com/
// @grant none
// @run-at document-idle
// ==/UserScript==

function getCards()
{
  if (document.getElementsByClassName("deck-info__cards-in-deck").length != 0)
  {
    var Deck = document.getElementsByClassName('deck-info__cards-in-deck')[0].innerHTML.substring(6, 99).slice(0, -7);
    
    document.title = Deck;
  }
  else
  {
    document.title = "No deck found!";
  }
  setTimeout(getCards, 30 * 1000); // 30 seconds
}

setTimeout(getCards, 30 * 1000);

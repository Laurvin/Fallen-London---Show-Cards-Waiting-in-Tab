// ==UserScript==
// @name Fallen London - Show Cards Waiting in Tab
// @namespace Fallen London - Show Cards Waiting in Tab
// @author Laurvin
// @description Shows the Cards Waiting text displayed under the Deck in the page title/tab instead of the default "Fallen London!".
// @version 1.1
// @icon http://i.imgur.com/XYzKXzK.png
// @downloadURL https://github.com/Laurvin/Fallen-London---Show-Cards-Waiting-in-Tab/raw/master/Fallen_London_-_Show_Cards_Waiting_in_Tab.user.js
// @include http://fallenlondon.storynexus.com/Gap/*
// @grant none
// @run-at document-idle
// ==/UserScript==

setInterval(function() {
    
  if (document.getElementsByClassName("deck-contents-description").length != 0)
  {
    var Deck = document.getElementsByClassName('deck-contents-description')[0].innerHTML;
    
    var DeckShort = Deck.substr(0, 17);
    
    document.title = DeckShort;
  }
  else
  {
    document.title = "No deck found!";
  }

}, 60 * 1000); // 1 minute

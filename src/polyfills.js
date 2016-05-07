'use strict';

/* Some DOM manipulation helpers and polyfills 
(not using JQuery here, so we need something to make the code look better ;) */
function appendTo(parent) {
  return function(child) {
    parent.appendChild(child);
  };
}

function removeElement(elem) {
  elem.parentElement.removeChild(elem);
}

function getElement(id) {
  return document.getElementById(id);
}

function getElementsByClass(name) {
  return document.getElementsByName(name);
}

function createElement(tag) {
  return document.createElement(tag);
}
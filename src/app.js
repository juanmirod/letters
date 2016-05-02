var App = (function(){
  'use strict';

  var currentState = 'words',
      currentWord = '',
      filledLetters = [],

  states = {
    home: {
      html: '<div id="letters"></div><div id="start">JUGAR</div>',
      init: function() {
        loadLetters("My first words");
        var startElem = getElement('start');
        startElem.addEventListener('click', function(){
          exports.changeState('words');
        });
      }
    },

    words: {
      html: '<div id="container">' +
            '<div id="word">' +
              'Loading ...' +
            '</div>' +
            '<div class="clearer"></div>' +
            '<div id="letters">' +
            '</div>' +
            '</div>',
      init: function() {
        var word = WordsService.getWord();
        loadWord(word);
        loadLetters(WordsService.getLetters(word, 2));
      }
    },

    completed: {
      html: '',
      init: function() {

      }
    }
  };

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

  function createLetterElem(letter) {

    var elem = createElement('div');

    elem.className = 'empty-letter-container';
    elem.innerHTML = '<div class="letter" style="border-color:' + WordsService.getLetterColor(letter) + ';">' + letter.toUpperCase() + '</div>';

    return elem;

  }

  function createClickableLetterElem(letter) {

    var elem = createElement('div');

    elem.className = 'letter-container';
    elem.innerHTML = '<div class="letter" style="border-color:' + WordsService.getLetterColor(letter) + ';">' + letter.toUpperCase() + '</div>';
    elem.clickListener = elem.addEventListener("click", addLetter, false);

    return elem;
  }

  function addLetter() {
    var elem = getElement('word');
    
    this.removeEventListener('click', this.clickListener);
    
    if(fillInLetter(elem, this.textContent)) {
      removeElement(this);
    } else {
      this.className = 'letter-container wrong';
    }

  }

  function fillInLetter(wordElem, letter) {

    var letterIndex = WordsService.findUnfilledIndexOf(wordElem.textContent, filledLetters, letter);
    if(letterIndex === -1) {
      return false;
    } else {
      filledLetters[letterIndex] = true;
      var letterElems = wordElem.childNodes;
      letterElems[letterIndex].className = 'letter-container';
      return true;
    }

  }

  function fillInWord(word, elem) {

    var letters = word.split('').map(createLetterElem);
    
    letters.forEach(appendTo(elem));

    return elem; 

  }

  function fillInLetters(letters, elem) {

    var letterElems = letters.split('').map(createClickableLetterElem);
    
    letterElems.forEach(appendTo(elem));

    return elem;    

  }

  function loadWord(word) {

    var elem = getElement('word');
    elem.innerHTML = '';
    fillInWord(word, elem);

  }

  function loadLetters(letters) {

    var elem = getElement('letters');
    elem.innerHTML = '';
    fillInLetters(letters, elem);
    
  }

  var exports = {

    init: function() {
      
      document.body.innerHTML = states[currentState].html;
      states[currentState].init();
    
    },

    changeState: function(newState) {

      //states[currentState].destroy();
      document.body.innerHTML = states[newState].html;
      states[newState].init();

    }

  };

  return exports;

})();


Words = ['guillermo', 'sofía', 'mamá', 'papá', 'noa'];

WordsService.init(Words, Letters);

App.init();

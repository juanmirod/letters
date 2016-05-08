var App = (function(){
  'use strict';

  var _currentState = 'home',
      _colors,
      _words,
      _letters,
      _filledLetters = [],

  states = {
    home: {
      html: '<div id="letters"></div><div id="start">JUGAR</div>',
      init: function() {
        loadLetters("Mis primeras palabras");
        var startElem = getElement('start');
        startElem.addEventListener('click', function(){
          api.changeState('words');
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
        var randomIndex = WordsService.getRandomIndex(_words);
        var word = _words[randomIndex];
        loadWord(word);
        loadLetters(WordsService.getLetters(word, _letters, 2));
      }
    },

    find: {
      html: '<div id="container">' +
            '<div id="find-letter">' +
              'Loading ...' +
            '</div>' +
            '<div class="clearer"></div>' +
            '<div id="letters">' +
            '</div>' +
            '</div>',
      init: function() {
        // select one letter, get more letters randomly, the user has to find all ocurrences
        var letter = WordService.getLetter(_letters);
        var letters = WordService.getLetters(letter+letter+letter, _letters, 15);
        //loadLetter(letter);
        loadLetters(WordsService.getLetters(word, _letters, 2));
      }
    }

  };

  function createLetterElem(letter) {

    var elem = createElement('div');

    elem.className = 'empty-letter-container';
    elem.innerHTML = '<div class="letter" style="border-color:' + WordsService.getLetterColor(_colors, _letters, letter) + ';">' + letter.toUpperCase() + '</div>';

    return elem;

  }

  function createClickableLetterElem(letter) {

    var elem = createElement('div');

    elem.className = 'letter-container';
    elem.innerHTML = '<div class="letter" style="border-color:' + WordsService.getLetterColor(_colors, _letters, letter) + ';">' + letter.toUpperCase() + '</div>';
    elem.clickListener = elem.addEventListener("click", addLetter, false);

    return elem;
  }

  function showCompleted() {

    var elem = createElement('div');
    elem.id = 'congratulations';
    elem.innerHTML = '¡¡FELICIDADES!!';
    elem.addEventListener("click", loadNewWord, false);

    document.body.appendChild(elem);

  }

  function checkCompletion() {
    
    if(api.isWordCompleted()) {
      showCompleted();
    } 

  }

  function loadNewWord() {

    removeElement(getElement('congratulations'));
    api.changeState('words');

  }


  function loadWord(word) {

    var elem = getElement('word');
    elem.innerHTML = '';
    fillInWord(word, elem);
    _filledLetters = Array.apply(null, Array(word.length))
          .map(Boolean.prototype.valueOf, false);

  }

  function loadLetters(letters) {

    var elem = getElement('letters');
    elem.innerHTML = '';
    fillInLetters(letters, elem);
    
  }

  function addLetter() {
    
    var elem = getElement('word');
    
    this.removeEventListener('click', this.clickListener);
    
    if(fillInLetter(elem, this.textContent)) {
      removeElement(this);
      checkCompletion();
    } else {
      this.className = 'letter-container wrong';
    }

  }

  function fillInLetter(wordElem, letter) {

    var letterIndex = WordsService.findUnfilledIndexOf(wordElem.textContent, _filledLetters, letter);
    if(letterIndex === -1) {
      return false;
    } else {
      _filledLetters[letterIndex] = true;
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

  function checkFalse(element){ 
    return element === false; 
  }

  var api = {

    init: function(colors, words, letters) {

      _colors = colors;
      _words = words;
      _letters = letters;
      document.body.innerHTML = states[_currentState].html;
      states[_currentState].init();
    
    },

    changeState: function(newState) {

      //states[_currentState].destroy();
      document.body.innerHTML = states[newState].html;
      states[newState].init();

    },

    isWordCompleted: function() {
      return _filledLetters.filter(checkFalse).length === 0;
    }

  };

  return api;

})();

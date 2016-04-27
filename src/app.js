var App = (function(){
  'strict mode';

  var currentState = 'words';

  var states = {
    home: {
      html: '',
      init: function() {

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
    }
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

    var letterIndex = word.indexOf(letter.toLowerCase());
    if(letterIndex == -1) {
      return false;
    } else {
      console.log(letterIndex);
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

    var letters = letters.split('').map(createClickableLetterElem);
    
    letters.forEach(appendTo(elem));

    return elem;    

  }

  return {

    init: function() {
      
      document.body.innerHTML = states[currentState].html;
      states[currentState].init();
    
    },

    changeState: function(newState) {

      states[currentState].destroy();
      document.body.innerHTML = states[newState].html;
      states[newState].init();

    },

    loadWord: function(word) {

      var elem = getElement('word');
      elem.innerHTML = '';
      fillInWord(word, elem);

    },

    loadLetters: function(letters) {

      var elem = getElement('letters');
      elem.innerHTML = '';
      fillInLetters(letters, elem);
      
    }
  }

})();


Words = ['guillermo', 'sofía', 'mamá', 'papá', 'noa'];

WordsService.init(Words);
var word = WordsService.getWord();

App.init();
App.loadWord(word);
App.loadLetters(WordsService.getLetters(word, 2));

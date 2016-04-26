(function(){
  'strict mode';

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

  function createClickabkeLetterElem(letter) {

    var elem = createElement('div');

    elem.className = 'letter-container';
    elem.innerHTML = '<div class="letter" style="border-color:' + WordsService.getLetterColor(letter) + ';">' + letter.toUpperCase() + '</div>';
    elem.clickListener = elem.addEventListener("click", addLetter, false);

    return elem;
  }

  function addLetter() {
    var elem = getElement('word');
    fillInLetter(elem, this.textContent);

    this.removeEventListener('click', this.clickListener);
    removeElement(this);
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

    var letters = letters.split('').map(createClickabkeLetterElem);
    
    letters.forEach(appendTo(elem));

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

  //Words = ["abcdefghijklmnñopqrstuvwxyz"];
  document.body.innerHTML = '    <div id="container">' +
        '<div id="word">' +
          'Loading ...' +
        '</div>' +
        '<div class="clearer"></div>' +
        '<div id="letters">' +
        '</div>' +
    '</div>';

  WordsService.init(Words);
  var word = WordsService.getWord();
  loadWord(word);
  loadLetters(WordsService.getLetters(word, 2));

})();
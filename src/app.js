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

  function createLetterElem(letter) {

    var elem = document.createElement('div');

    elem.className = 'empty-letter-container';
    elem.innerHTML = '<div class="letter">' + letter.toUpperCase() + '</div>';

    return elem;

  }

  function createClickabkeLetterElem(letter) {

    var elem = document.createElement('div');

    elem.className = 'letter-container';
    elem.innerHTML = '<div class="letter" style="border-color:' + WordsService.getLetterColor(letter) + ';">' + letter.toUpperCase() + '</div>';
    elem.clickListener = elem.addEventListener("click", addLetter, false);

    return elem;
  }

  function addLetter() {
    var elem = document.getElementById('word');
    fillInLetter(elem, this.textContent);

    this.removeEventListener('click', this.clickListener);
    removeElement(this);
  }

  function fillInLetter(letter) {

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

    var elem = document.getElementById('word');
    elem.innerHTML = '';
    fillInWord(word, elem);

  }

  function loadLetters(letters) {

    var elem = document.getElementById('letters');
    elem.innerHTML = '';
    fillInLetters(letters, elem);
    
  }

  //Words = ["abcdefghijklmnñopqrstuvwxyz"];
  WordsService.init(Words);
  var word = WordsService.getWord();
  loadWord(word);
  loadLetters(WordsService.getLetters(word, 2));

})();
(function(){

  function getLetterColor(letter) {

    var colors = ['#0404EE', '#04EE04', '#EE0404', '#EEEE04', '#04EEEE', '#EE04EE'];
    return colors[Letters.indexOf(letter)%colors.length];

  }

  function appendTo(parent) {
    return function(child) {
      parent.appendChild(child);
    }
  }

  function createLetterElem(letter) {

    var elem = document.createElement('div');

    elem.className = 'letter-container';
    elem.innerHTML = '<div class="letter" style="border-color:' + getLetterColor(letter) + ';">' + letter.toUpperCase() + '</div>';

    return elem;

  }

  function fillInWord(word, elem) {

    var letters = word.split('').map(createLetterElem);
    
    letters.forEach(appendTo(elem));

    return elem; 

  }

  function loadWord(word) {

    var elem = document.getElementById('word');
    elem.innerHTML = '';
    fillInWord(word, elem);

  }

  Words = ["abcdefghijklmnñopqrstuvwxyz"];
  WordsService.init(Words);
  loadWord(WordsService.getWord());

})();
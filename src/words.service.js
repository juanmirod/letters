var WordsService = (function(){
  'strict mode';

  var colors = ['#0404EE', '#04EE04', '#EE0404', '#EEEE04', '#04EEEE', '#EE04EE'],
    words = [],
    views = [],
    lastWord = -1,

  min = function(array) { 
    return array.indexOf(Math.min.apply(null, array));
  },

  /* Takes the letters from the word provided and returns 
    a new string with the letters shuffled 
  */
  shuffle = function(word) {
    
    var wordLetters = word.split(""),
        n = wordLetters.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [wordLetters[i], wordLetters[j]] = 
        [wordLetters[j], wordLetters[i]];
    }

    return wordLetters.join("");

  },

  randomLetter = function() {
    return Letters[Math.floor(Math.random()*Letters.length)];
  },

  randomLetters = function(num) {
    if(num == 0) {
      return '';
    } else {
      return randomLetter() + randomLetters(num-1);
    }
  }

  return {

    init: function(newWords, savedViews) {
      if(typeof savedViews == 'undefined') {
        views = Array.apply(null, Array(words.length))
          .map(Number.prototype.valueOf, 0);        
      } else {
        views = savedViews.slice();
      }

      words = newWords.slice();

      lastWord = -1;
    },

    getWord: function() {
      var num = min(views);
      views[num]++;
      return words[num];
    },

    getLetters: function(word, extraLetters) {
      return shuffle(word) + randomLetters(extraLetters);
    },

    getLetterColor: function(letter) {
      return colors[Letters.indexOf(letter)%colors.length];
    }

  };

})(); 
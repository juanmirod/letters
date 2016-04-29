var WordsService = (function WordServiceDef() {
  'use strict';

  var colors = ['#0404EE', '#04EE04', '#EE0404', '#EEEE04', '#04EEEE', '#EE04EE'],
    words = [],
    views = [],
    letters = [],
    lastWord = -1,

  min = function(array) { 
    var result = array.indexOf(Math.min.apply(null, array));
    if(result === -1) {
      return 0;
    } else {
      return result;
    }
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
    return letters[Math.floor(Math.random()*letters.length)];
  },

  randomLetters = function(num) {
    if(num === 0) {
      return '';
    } else {
      return randomLetter() + randomLetters(num-1);
    }
  };

  return {

    init: function(newWords, languageLetters, savedViews) {
      if(typeof savedViews == 'undefined') {
        views = Array.apply(null, Array(words.length))
          .map(Number.prototype.valueOf, 0);        
      } else {
        views = savedViews.slice();
      }

      words = newWords.slice();
      letters = languageLetters.slice();

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
      return colors[letters.indexOf(letter)%colors.length];
    }

  };

})(); 
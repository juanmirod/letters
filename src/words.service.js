var WordsService = (function WordServiceDef() {
  'use strict';

  var colors = ['#0404EE', '#04EE04', '#EE0404', '#EEEE04', '#04EEEE', '#EE04EE'],
    words = [],
    letters = [],
    lastWord = -1,

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

    init: function(newWords, languageLetters) {
      words = newWords.slice();
      letters = languageLetters.slice();

      lastWord = -1;
    },

    getWord: function() {
      // just returns a random word from the list
      lastWord = Math.floor(Math.random() * words.length);
      return words[lastWord];
    },

    getLastWord: function() {

      return words[lastWord];
      
    },

    findUnfilledIndexOf: function(word, filledLetters, letter) {

      var result = 0;
      var index = 0;
      var firstTime = true;

      do {
        if(!firstTime) {
          result++;
        }

        index = word.substr(result).indexOf(letter);
        result += index;
        firstTime = false;

      } while (index !== -1 && filledLetters[result]);

      return result;

    },

    getLetters: function(word, extraLetters) {
      return shuffle(word + randomLetters(extraLetters));
    },

    getLetterColor: function(letter) {
      return colors[letters.indexOf(letter)%colors.length];
    }

  };

})(); 
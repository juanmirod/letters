var WordsService = (function WordServiceDef() {
  'use strict';

  /* Takes the letters from the word provided and returns 
    a new string with the letters shuffled 
  */
  var shuffle = function(word) {
    
    var wordLetters = word.split(""),
        n = wordLetters.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [wordLetters[i], wordLetters[j]] = 
        [wordLetters[j], wordLetters[i]];
    }

    return wordLetters.join("");

  },

  randomLetter = function(letters) {

    return letters[Math.floor(Math.random()*letters.length)];
  
  },

  randomLetters = function(letters, num) {
  
    if(num === 0 || !letters) {
      return '';
    } else {
      return randomLetter(letters) + randomLetters(letters, num-1);
    }
  
  };

  return {

    getRandomIndex: function(words) {
      
      return Math.floor(Math.random() * words.length);

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

    getLetters: function(word, letters, numExtraLetters) {

      return shuffle(word + randomLetters(letters, numExtraLetters));

    },

    getLetterColor: function(colors, letters, letter) {

      return colors[letters.indexOf(letter)%colors.length];

    }

  };

})(); 
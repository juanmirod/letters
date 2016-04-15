var WordsService = (function(){

  var views = Array.apply(null, Array(Words.length))
    .map(Number.prototype.valueOf, 0);
  var lastWord = -1;

  var min = function(array) { 
    return array.indexOf(Math.min.apply(null, array));
  }

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

  }

  return {

    init: function() {
      views = Array.apply(null, Array(Words.length))
        .map(Number.prototype.valueOf, 0);
      lastWord = -1;
    },

    getWord: function() {

      var num = min(views);
      views[num]++;
      return Words[num];

    },

    getLetters: function(word, extraLetters) {

      return shuffle(word);

    }

  };

})(); 
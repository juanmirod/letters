describe('WordsService', function(){

  var WS = WordsService;
  
  it('should have a getLetters function', function(){

    expect(WS.getLetters).toBeDefined();

  });

  it('should have a getWord function', function(){

    expect(WS.getWord).toBeDefined();
    
  });

  it('should have a getLetterColor function', function(){

    expect(WS.getLetterColor).toBeDefined();
    
  });

  describe('getWords', function() {
    
    it('should return a word from the list of words', function(){

      var word = WS.getWord();
      expect(Words.indexOf(word)).not.toBe(-1);

    });

    it('should return a different word that the last time', function(){

      for(var i=0; i < 10; i++) {
        var word1 = WS.getWord();
        var word2 = WS.getWord();
        expect(word1).not.toEqual(word2);
      }

    });

    it('should return the lesser know words for the user', function(){

      var words = ['a', 'b', 'c'];
      WS.init(words);

      var word1 = WS.getWord();
      var word2 = WS.getWord();
      var word3 = WS.getWord();

      expect(word1).not.toEqual(word2);
      expect(word2).not.toEqual(word3);

    });

  });

  describe('getLetters', function() { 
    
    it('should return the letters from the word, but unsorted', function(){

      letters = WS.getLetters('word', 0);
      expect(letters.length).toEqual(4);
      expect(letters.indexOf('w')).not.toEqual(-1);
      expect(letters.indexOf('o')).not.toEqual(-1);
      expect(letters.indexOf('r')).not.toEqual(-1);
      expect(letters.indexOf('d')).not.toEqual(-1);

    });

    it('should add N letters to the letters from the word', function(){

      letters = WS.getLetters('word', 2);
      expect(letters.length).toEqual(6);

    });

  });

  describe('getLetterColor', function(){

    it('should assign always the same color to each letter', function(){

      var colors = Letters.map(WS.getLetterColor);
    
      for(var i=0; i<Letters.length; i++) {
        expect(WS.getLetterColor(Letters[i])).toEqual(colors[i]);
      }

    });
    
  });
});
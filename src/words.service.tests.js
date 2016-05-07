describe('WordsService', function(){
  'use strict';

  var WS = WordsService;

  beforeEach(function(){
    WS.init(Words, Letters);
  });
  
  it('should have a getWord function', function(){

    expect(WS.getWord).toBeDefined();
    
  });

  it('should have a findUnfilledIndexOf function', function(){

    expect(WS.findUnfilledIndexOf).toBeDefined();
    
  });

  it('should have a getLastWord function', function(){

    expect(WS.getLastWord).toBeDefined();

  });
  
  it('should have a getLetters function', function(){

    expect(WS.getLetters).toBeDefined();

  });

  it('should have a getLetterColor function', function(){

    expect(WS.getLetterColor).toBeDefined();
    
  });


  describe('getWords', function() {
    
    it('should return a word from the list of words', function(){

      var word = WS.getWord();
      expect(Words.indexOf(word)).not.toBe(-1);

    });

  });

  describe('findUnfilledIndexOf', function() { 
   
    it('should return -1 if the letter is not in the word', function() {
      
      var index = WS.findUnfilledIndexOf('word', [], 'a');
      expect(index).toEqual(-1);

    });

    it('should return the first ocurrence index if it is unfilled', function() {
      
      var index = WS.findUnfilledIndexOf('word', [], 'o');
      expect(index).toEqual(1);

    });

    it('should return the index of the second ocurrence if the first is filled', function() {

      var index = WS.findUnfilledIndexOf('woord', [false, true, false, false, false], 'o');
      expect(index).toEqual(2);
  
    });

    it('should return the index of the third ocurrence if the first and second are filled', function() {

      var index = WS.findUnfilledIndexOf('wooord', [false, true, true, false, false, false], 'o');
      expect(index).toEqual(3);
  
    });

  });

  describe('getLastWord', function(){

    it('should return the last word returned by getWord', function(){
      var word = WS.getWord();
      var last = WS.getLastWord();

      expect(word).toEqual(last);
    });

  });

  describe('getLetters', function() { 
    
    it('should return the letters from the word, but unsorted', function(){

      var letters = WS.getLetters('word', 0);
      expect(letters.length).toEqual(4);
      expect(letters.indexOf('w')).not.toEqual(-1);
      expect(letters.indexOf('o')).not.toEqual(-1);
      expect(letters.indexOf('r')).not.toEqual(-1);
      expect(letters.indexOf('d')).not.toEqual(-1);

    });

    it('should add N letters to the letters from the word', function(){

      var letters = WS.getLetters('word', 2);
      expect(letters.length).toEqual(6);

    });

  });

  describe('getLetterColor', function(){

    it('should assign always the same color to each letter', function(){

      var colors = Letters.map(WS.getLetterColor);
    
      for(var i=0; i < Letters.length; i++) {
        expect(WS.getLetterColor(Letters[i])).toEqual(colors[i]);
      }

    });

  });
});
describe('WordsService', function(){
  'use strict';

  var WS = WordsService,
      Colors = ['#0404EE', '#04EE04', '#EE0404', '#EEEE04', '#04EEEE', '#EE04EE'],
      Words = ['sofia', 'mama', 'alba'],
      Letters = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  it('should have a getRandomIndex function', function(){
    
    expect(WS.getRandomIndex).toBeDefined();

  });

  it('should have a findUnfilledIndexOf function', function(){

    expect(WS.findUnfilledIndexOf).toBeDefined();
    
  });
  
  it('should have a getLetters function', function(){

    expect(WS.getLetters).toBeDefined();

  });

  it('should have a getLetterColor function', function(){

    expect(WS.getLetterColor).toBeDefined();
    
  });


  describe('getRandomIndex', function() {
    
    it('should return a word from the list of words', function(){

      var randomIndex = WS.getRandomIndex(Words);
      expect(Words.indexOf(Words[randomIndex])).not.toBe(-1);

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

  describe('getLetters', function() { 
    
    it('should return the letters from the word, but unsorted', function(){

      var letters = WS.getLetters('word');
      expect(letters.length).toEqual(4);
      expect(letters.indexOf('w')).not.toEqual(-1);
      expect(letters.indexOf('o')).not.toEqual(-1);
      expect(letters.indexOf('r')).not.toEqual(-1);
      expect(letters.indexOf('d')).not.toEqual(-1);

    });

    it('should add N letters to the letters from the word', function(){

      var letters = WS.getLetters('word', Letters, 2);
      expect(letters.length).toEqual(6);

    });

  });

  describe('getLetterColor', function(){

    it('should assign always the same color to each letter', function(){

      var colors = Letters.map(function(letter){
        return WS.getLetterColor(Colors, Letters, letter);
      });
    
      for(var i=0; i < Letters.length; i++) {
        expect(WS.getLetterColor(Colors, Letters, Letters[i])).toEqual(colors[i]);
      }

    });

  });
});
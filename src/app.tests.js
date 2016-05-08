'use strict';
describe('App', function() {

  var Colors = ['#0404EE', '#04EE04', '#EE0404', '#EEEE04', '#04EEEE', '#EE04EE'],
      Words = ['a', 'b', 'c', 'd'],
      Letters = ['a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  beforeEach(function(){
    App.init(Colors, Words, Letters);
  });

  describe('Words state', function(){ 

    it('should load a word in the words element', function() {
    
      App.changeState('words');
      var elem = document.getElementById('word');
      expect(elem.innerHTML).not.toEqual('Loading...');
          
    });

    it('should load the letters in the letters element', function() {
    
      App.changeState('words');
      var elem = document.getElementById('letters');
      expect(elem.innerHTML).not.toEqual('');
    
    });

    it('should check if the user has completed the word', function() {
    
      App.changeState('words');
      var event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });

      var letterElems = document.getElementsByClassName('letter-container');
      letterElems[0].dispatchEvent(event);

      expect(App.isWordCompleted()).toEqual(true);
    
    });
    
  });

});
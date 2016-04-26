describe('App', function() {

  //TODO WE NEED KARMA to load a virtual dom...

  it('should load a word in the words element', function(){
    var elem = document.getElementById('word');
    expect(elem.innerHTML).not.toEqual('Loading...');
  });

  it('should load the letters in the letters element', function(){
    var elem = document.getElementById('word');
    expect(elem.innerHTML).not.toEqual('');
  });

  describe('Clickable letters', function(){

    it('should call addLetter on click', function(){
      
      var event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });

      var letterElems = document.getElementsByClassName('letter-container');
      letterElems[0].dispatchEvent(event);

      

    });

    it('should check when the user has completed the word', function(){

    });

  });

});
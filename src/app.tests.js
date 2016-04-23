describe('App', function() {

  //TODO WE NEED KARMA to load a virtual dom...

  it('should load a word in the words element', function(){
    var elem = document.getElementById('word');
    expect(elem.innerHTML).not.toEqual('Loading...');
  });

  it('should load the letters in the letters element', function(){

  });

  describe('Clickable letters', function(){

    it('should be clickable and call addLetter on click', function(){

    });

    it('should check when the user has completed the word', function(){

    });

  });

});
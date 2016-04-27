describe('App', function() {

  var WS = WordsService;

  beforeEach(function(){
    WS.init(['a', 'b', 'c']);
  });

  it('should load a word in the words element', function(){
    var elem = document.getElementById('word');
    expect(elem.innerHTML).not.toEqual('Loading...');
  });

  it('should load the letters in the letters element', function(){
    var elem = document.getElementById('word');
    expect(elem.innerHTML).not.toEqual('');
  });

  it('should check if the user has completed the word', function(){
    var event = new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    });

    var letterElems = document.getElementsByClassName('letter-container');
    letterElems[0].dispatchEvent(event);

    expect(App.wordCompleted).toEqual(true);
  });
});
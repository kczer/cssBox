var style1 = [['h1', 'border-Red'], ['h1', 'border-thickness-10'], ['h1', 'border-left-style-solid'], ['h1', 'border-top-style-dotted']];
var style2 = [['h2', 'set-sans-serif-font-Cabin'],['p', 'complement-serif-font-Cabin'], ['p', 'font-size-large'],['p', 'border-thickness-5'],['p', 'border-style-solid'], 
['body','background-image-lilb'], ['p','border-radius-15'], ['p','background-color-Red'], ['p', 'complement-background-Red'],
['body','background-size-cover'], ['body','background-position-center-center'], ['body', 'background-repeat-no-repeat'],['body', 'background-fixed']];
var styles = [style1, style2];
var currentStyleIndex = -1;

var removeStylePair = function(aPair){
  Array.prototype.forEach.call(document.querySelectorAll(aPair[0]), function($el){
    $el.classList.remove(aPair[1]);
  });
}
var applyStylePair = function(aPair){
  Array.prototype.forEach.call(document.querySelectorAll(aPair[0]), function($el){
    $el.classList.add(aPair[1]);
  });
}

var nextStyle = function(){
  var previousStyleIndex = currentStyleIndex; //-1 means none
  currentStyleIndex = (currentStyleIndex + 1) % styles.length;
  if (previousStyleIndex > -1){
    styles[previousStyleIndex].forEach(removeStylePair);
  }
  styles[currentStyleIndex].forEach(applyStylePair);
}

document.body.addEventListener('click', nextStyle);
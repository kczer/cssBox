var style1 = [['h1', 'set-serif-font-Old-Standard-TT']];
var style2 = [['h1', 'complement-serif-font-Old-Standard-TT']];
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
var style1 = [['h1', 'border-Red'], ['h1', 'border-thickness-10'], ['h1', 'border-left-style-solid'], ['h1', 'border-top-style-dotted']];
var style2 = [['h2', 'set-sans-serif-font-Cabin'],['p', 'complement-serif-font-Cabin'], ['p', 'font-size-large'],['p', 'border-thickness-5'],['p', 'border-style-solid'], 
['body','background-image-lilb'], ['p','border-radius-15'], ['p','background-color-Red'], ['p', 'complement-background-Red'],
['body','background-size-cover'], ['body','background-position-center-center'], ['body', 'background-repeat-no-repeat'],['body', 'background-fixed']];
var style3 = [['body', 'navbar-padding-3'], ['body', 'footer-padding-2'], ['section', 'sidebarright-padding-15'],['section', 'center500'], ['section', 'sidebarleft-padding-10'], ['h1', 'set-sans-serif-font-Ubuntu'], ['h2', 'set-sans-serif-font-Ubuntu'],
['h3', 'set-sans-serif-font-Ubuntu'], ['p', 'complement-serif-font-Ubuntu'], ['.explanation', 'sidebarright-padding-15'], ['.explanation', 'sidebarleft-padding-10'], ['.explanation', 'center500'], ['.participation', 'sidebarright-padding-15'], ['.participation', 'sidebarleft-padding-10'],['.participation', 'center500'], ['.benefits', 'sidebarright-padding-15'], ['.benefits', 'sidebarleft-padding-10'], ['.benefits', 'center500']
, ['.requirements', 'sidebarright-padding-15'], ['.requirements', 'sidebarleft-padding-10'], ['.requirements', 'center500'], ['.requirements', 'footer-padding-5'], ['footer', 'alignCenter'], ['footer', 'footer'], ['.design-selection', 'navbarleftfixed'], ['.select', 'invisible'], ['.design-name', 'partA'], ['.designer-name', 'partB'],['.design-archives', 'navbarrightfixed'], ['archives', 'invsible'], 
['.zen-resources', 'navbarfixed'], ['.resources', 'title'], ['.zen-validate-html', 'buttonLink'], ['.zen-validate-css', 'buttonLink'], ['.zen-license', 'buttonLink'],['.zen-accessibility', 'buttonLink'], ['.zen-github', 'buttonLink'],['.zen-validate-html', 'verticallyCenter'], ['.zen-validate-html', 'linkSpacing'], ['.zen-validate-html', 'complement-text-PaleVioletRed'],
['.zen-validate-css', 'verticallyCenter'], ['.zen-validate-css', 'linkSpacing'], ['.zen-validate-css', 'complement-text-PaleVioletRed'], ['.zen-license', 'verticallyCenter'], ['.zen-license', 'linkSpacing'], ['.zen-license', 'complement-text-PaleVioletRed'],
['.zen-accessibility', 'verticallyCenter'], ['.zen-accessibility', 'linkSpacing'], ['.zen-accessibility', 'complement-text-PaleVioletRed'], ['.zen-github', 'verticallyCenter'], ['.zen-github', 'linkSpacing'], ['.zen-github', 'complement-text-PaleVioletRed']];
var styles = [style1, style2, style3];
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
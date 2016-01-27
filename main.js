var style1 = [['h1', 'border-Red'], ['h1', 'border-thickness-10'], ['h1', 'border-left-style-solid'], ['h1', 'border-top-style-dotted']];


var style2 = [['body', 'navbar-padding-3'], ['body', 'footer-padding-2'], ['section', 'sidebarright-padding-8'],['section', 'center600'], ['section', 'sidebarleft-padding-10'], ['h1', 'set-sans-serif-font-Ubuntu'], ['h2', 'set-sans-serif-font-Ubuntu'],
['h3', 'set-sans-serif-font-Ubuntu'], ['p', 'complement-serif-font-Ubuntu'], ['.explanation', 'sidebarright-padding-8'], ['.explanation', 'sidebarleft-padding-10'], ['.explanation', 'center600'], ['.participation', 'sidebarright-padding-8'], ['.participation', 'sidebarleft-padding-10'],['.participation', 'center600'], ['.benefits', 'sidebarright-padding-8'], ['.benefits', 'sidebarleft-padding-10'], ['.benefits', 'center600']
, ['.requirements', 'sidebarright-padding-8'], ['.requirements', 'sidebarleft-padding-10'], ['.requirements', 'center600'], ['.requirements', 'footer-padding-5'], ['footer', 'alignCenter'], ['footer', 'footer'], ['.design-selection', 'navbarleftfixed'],['view-css', '.complement-text-Red'],['.designer-name', 'font-size-smaller'],['.select', 'invisible'], ['.design-name', 'partA'], ['.designer-name', 'partB'],['.design-archives', 'navbarfixed'], ['archives', 'invsible'], 
['body','background-image-zen'],['body','background-size-percent-30'],['body', 'background-repeat-no-repeat'],['body', 'background-fixed'],['body','background-position-right-bottom'],['.zen-resources', 'navbarrightfixed'], ['.zen-validate-html', 'buttonLink'], ['.zen-validate-css', 'buttonLink'], ['.zen-license', 'buttonLink'],['.zen-accessibility', 'buttonLink'], ['.zen-github', 'buttonLink'],['.zen-validate-html', 'verticallyCenter'], ['.zen-validate-html', 'linkSpacing'], ['.zen-validate-html', 'complement-text-PaleVioletRed'],
['.zen-validate-css', 'verticallyCenter'], ['.zen-validate-css', 'linkSpacing'], ['.zen-validate-css', 'complement-text-PaleVioletRed'], ['.zen-license', 'verticallyCenter'], ['.zen-license', 'linkSpacing'], ['.zen-license', 'complement-text-PaleVioletRed'],
['.zen-accessibility', 'verticallyCenter'], ['.zen-accessibility', 'linkSpacing'], ['.zen-accessibility', 'complement-text-PaleVioletRed'],['.navbarrightfixed','background-Black'], ['.zen-github', 'verticallyCenter'], ['.zen-github', 'linkSpacing'], ['.zen-github', 'complement-text-PaleVioletRed']];


var zenStyle = [['body', 'navbar-padding-3'], ['body', 'footer-padding-2'], ['section', 'sidebarright-padding-8'],['section', 'center600'], ['section', 'sidebarleft-padding-10'], ['h1', 'set-sans-serif-font-Ubuntu'], ['h2', 'set-sans-serif-font-Ubuntu'],
['h3', 'set-sans-serif-font-Ubuntu'], ['p', 'complement-serif-font-Ubuntu'], ['.explanation', 'sidebarright-padding-8'], ['.explanation', 'sidebarleft-padding-10'], ['.explanation', 'center600'], ['.participation', 'sidebarright-padding-8'], ['.participation', 'sidebarleft-padding-10'],['.participation', 'center600'], ['.benefits', 'sidebarright-padding-8'], ['.benefits', 'sidebarleft-padding-10'], ['.benefits', 'center600']
, ['.requirements', 'sidebarright-padding-8'], ['.requirements', 'sidebarleft-padding-10'], ['.requirements', 'center600'], ['.requirements', 'footer-padding-5'], ['footer', 'alignCenter'], ['footer', 'footer'], ['.design-selection', 'navbarleftfixed'],['.design-name', 'font-size-smaller'],['.designer-name', 'font-size-smaller'],['.select', 'invisible'], ['.design-name', 'partA'], ['.designer-name', 'partB'],['.design-archives', 'navbarrightfixed'], ['archives', 'invsible'], 
['body','background-image-zen'],['body','background-size-percent-30'],['body', 'background-repeat-no-repeat'],['body', 'background-fixed'],['body','background-position-right-bottom'],['.zen-resources', 'navbarfixed'], ['.resources', 'title'], ['.zen-validate-html', 'buttonLink'], ['.zen-validate-css', 'buttonLink'], ['.zen-license', 'buttonLink'],['.zen-accessibility', 'buttonLink'], ['.zen-github', 'buttonLink'],['.zen-validate-html', 'verticallyCenter'], ['.zen-validate-html', 'linkSpacing'], ['.zen-validate-html', 'complement-text-PaleVioletRed'],
['.zen-validate-css', 'verticallyCenter'], ['.zen-validate-css', 'linkSpacing'], ['.zen-validate-css', 'complement-text-PaleVioletRed'], ['.zen-license', 'verticallyCenter'], ['.zen-license', 'linkSpacing'], ['.zen-license', 'complement-text-PaleVioletRed'],
['.zen-accessibility', 'verticallyCenter'], ['.zen-accessibility', 'linkSpacing'], ['.zen-accessibility', 'complement-text-PaleVioletRed'],['.navbarfixed','background-Black'], ['.zen-github', 'verticallyCenter'], ['.zen-github', 'linkSpacing'], ['.zen-github', 'complement-text-PaleVioletRed']];
var styles = [style1, style2, zenStyle];
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
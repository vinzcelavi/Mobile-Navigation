<h1>MOBILE NAVIGATION</h1>
Transform your main navigation into a select object for mobile browsers.

Lightweigth plugin: Less than 1KB !

<h2>Demo</h2>

http://www.celavi.fr/github/Mobile-Navigation

<h2>Usage</h2>

Download jquery.mobileNav.pack.js (required jQuery) and add this line

<div class="highlight">
<pre>
$(document).ready(function(){
  
  $('.menu').mobileNav();
  
});
</pre>
</div>

You can also change the default Parameters

<div class="highlight">
<pre>
$(document).ready(function(){

  $('.menu').mobileNav({
    maxWidth: 781, // apply the mobile navigation when browser width is less than this value
    classNav: 'mobile-nav', // class of the <select> navigation
    idNav: 'mobile-nav', // id of the <select> navigation
    container: $('.header'), // element wrapping the <select> navigation
    hasLabel: true, // if true prepend a label before the <select> nav and wrap both elements in a <div>, if false the is no label, and no wrapper
    label: 'Navigation', // text value of the label
    classWrapper: 'wrapper-nav' // class of the <div> wrapping the label and the <select> nav
  });

});
</pre>
</div>

<h2>Author</h2>

Vincent Bianciotto
www.celavi.fr

<h2>Copyright and licence</h2>

Dual licensed under MIT and GPL.
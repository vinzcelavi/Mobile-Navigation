<h1>jQuery Mobile navigation</h1>
Transform your main navigation into a select object for mobile browsers.

<h2>Demo</h2>

http://www.celavi.fr/github/Mobile-Navigation

<h2>JQuery</h2>

Download jquery.mobileNav.js (required jQuery)

<pre>
<code>
$(document).ready(function(){
  
  $('.menu').mobileNav();
  
});
</code>
</pre>

You can also change the default Parameters

<pre>
<code>
$(document).ready(function(){

  $('.menu').mobileNav({
    classNav: 'mobile-nav', // class of the select navigation
    idNav: 'mobile-nav', // id of the select navigation
    container: $('.header nav'), // element wrapping the select navigation
    label: 'Navigation', // text value on first option select nav
  });

});
</code>
</pre>

<h2>CSS</h2>

Of course you can change the CSS for your consideration

<pre>
<code>
    .mobile-nav {
      display: none; /* hide the select nav by default */
    }
    
    @media only screen and (max-width: 781px) {
      .menu {display: none;} /* hide the main navigation */
      .mobile-nav {display: block; min-width: 460px;} /* show the select navigation */
    }
    
    @media only screen and (max-width: 481px) {
      .mobile-nav {min-width: 320px;} /* change width for smaller screen */
    }
</code>
</pre>

<h2>Author</h2>

Vincent Bianciotto
www.celavi.fr

<h2>Copyright and licence</h2>

Dual licensed under MIT and GPL.
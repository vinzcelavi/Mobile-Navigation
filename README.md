MOBILE NAVIGATION (required jQuery)
Transform your main navigation into a select object for mobile browsers.

Lightweigth plugin: Less than 1KB !

DEMO

http://www.celavi.fr/github/Mobile-Navigation

USAGE

$('.menu').mobileNav({
  maxWidth: 781,
  classNav: 'mobile-nav',
  idNav: 'mobile-nav',
  container: $('.header'),
  hasLabel: true,
  label: 'Navigation',
  classWrapper: 'wrapper-nav'
});

PARAMS

maxWidth: apply the mobile navigation when browser width is less than this value (default 781px)
classNav: class of the <select> navigation
idNav: id of the <select> navigation
container: element wrapping the <select> navigation
hasLabel: if true prepend a label before the <select> nav and wrap both elements in a <div>, if false the is no label, and no wrapper
label: text value of the label
classWrapper: class of the <div> wrapping the label and the <select> nav

AUTHORS

Vincent Bianciotto
www.celavi.fr

COPYRIGHT AND LICENSE

Dual licensed under MIT and GPL.
/*
 * jQuery.mobileNav - Transform your main navigation into a select object for mobile browsers
 * Copyright © 2012 Vincent Bianciotto - http://www.celavi.fr
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2012
 * @author Vincent Bianciotto
 * @version 0.1
 */
 
(function($){
  $.fn.mobileNav = function(options) {
  
    var defaults = {
      maxWidth: 781,
      classNav: 'mobile-nav',
      idNav: 'mobile-nav',
      container: $('.header'),
      hasLabel: true,
      label: 'Navigation',
      classWrapper: 'wrapper-nav'
    };
    
    var options = $.extend(defaults, options);
 
    // Check document width
  	if($(document).width() < options.maxWidth) {
    	var nav = $(this);
    	nav.hide();
    	// Create <select> object
      var selectNav = $('<select />', {id: options.idNav, class: options.classNav});
    	
    	// If has label create a wrapper
    	if(options.hasLabel == true){
       	var wrapperNav = $('<div />', {class: options.classWrapper});
      	var label = $('<label />', {class: 'label', text: options.label});
        wrapperNav.append(label).append(selectNav);
        options.container.append(wrapperNav);

      // Else if just append <select> to the container 
    	}else if(options.hasLabel == false){
      	options.container.append(selectNav);
      }

    	// Populate nav items in <select>
    	nav.find('a').each(function(){
        var text = $(this).text();
        var value = $(this).attr('href');
        
        selectNav.append('<option value="'+value+'">'+text+'</option>');
    	});
    	
    	// Actions on change <select>
    	selectNav.change(function(){
        window.location = $(this).val();
    	});
    }
  
  };
})(jQuery);
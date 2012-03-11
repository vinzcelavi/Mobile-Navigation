/*
 * jQuery.mobileNav - Transform your main navigation into a select object for mobile browsers
 * Copyright © 2012 Vincent Bianciotto - http://www.celavi.fr
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2012
 * @author Vincent Bianciotto
 * @version 0.1
 */
(function(a){a.fn.mobileNav=function(b){var c={maxWidth:781,classNav:"mobile-nav",idNav:"mobile-nav",container:a(".header"),hasLabel:true,label:"Navigation",classWrapper:"wrapper-nav"};var b=a.extend(c,b);if(a(document).width()<b.maxWidth){var d=a(this);d.hide();var e=a("<select />",{id:b.idNav,"class":b.classNav});if(b.hasLabel==true){var f=a("<div />",{"class":b.classWrapper});var g=a("<label />",{"class":"label",text:b.label});f.append(g).append(e);b.container.append(f)}else if(b.hasLabel==false){b.container.append(e)}d.find("a").each(function(){var b=a(this).text();var c=a(this).attr("href");e.append('<option value="'+c+'">'+b+"</option>")});e.change(function(){window.location=a(this).val()})}}})(jQuery)
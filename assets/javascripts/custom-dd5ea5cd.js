Modernizr.svg||jQuery('img[src*="svg"]').attr("src",function(){return jQuery(this).attr("src").replace(".svg",".png")}),jQuery(document).ready(function(t){!function(){{var e=t(".simple-tabs-nav"),n=e.children("li");t(".simple-tabs-content")}e.each(function(){var e=t(this);e.next().children(".simple-tabs-content").stop(!0,!0).hide().first().show(),e.children("li").first().addClass("current").stop(!0,!0).show()}),n.on("click",function(e){var n=t(this);n.siblings().removeClass("current").end().addClass("current"),n.parent().next().children(".simple-tabs-content").stop(!0,!0).hide().siblings(n.find("a").attr("href")).fadeIn(),e.preventDefault()})}(),function(){var e=t(".acc-container"),n=t(".acc-trigger");e.hide(),n.first().addClass("active").next().show();var s=e.outerWidth(!0);n.css("width",s),e.css("width",s),n.on("click",function(e){t(this).next().is(":hidden")&&(n.removeClass("active").next().slideUp(300),t(this).toggleClass("active").next().slideDown(300)),e.preventDefault()}),t(window).on("resize",function(){s=e.outerWidth(!0),n.css("width",n.parent().width()),e.css("width",e.parent().width())})}()}),$(document).ready(function(){$("#ajax-contact-form").submit(function(){var t=$(this).serialize();return $.ajax({type:"post",url:"contact-form/contact.php",data:t,success:function(t){result="OK"==t?'<div class="note-success">Your message has been sent. Thank you!</div>':t,$("#note").html(result)}}),!1}),$("a[rel^='prettyPhoto']").prettyPhoto()});
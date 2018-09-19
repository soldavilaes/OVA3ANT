//This is a very simple tab group jQuery function I wrote for a site.
//vistit http://megadalbey.com for more fun stuff.
/*
jQuery(".tab-body-container").each(function(i, e) { //get all tab group containers
  t = getUrlVars()["t"]; //this bit only works if you're using it in a browser window and you pre-select a tab by adding (for example) ?t=1 for first tab to URL string.
  if (t) {
    jQuery(e).find(".tab-group").children().removeClass("tab-current");
    c = jQuery(e).find(".tab-group li#tab-" + t);
    c.addClass("tab-current");
  } else {
    c = jQuery(e).find(".tab-group li.tab-current"); //get the current tab
  }

  if (c.length == 0) { //if there isn't a current tab, get the first tab.
    c = jQuery(e).find(".tab-group").children().first();
    c.addClass("tab-current");
  }

  setTabBody(c);
});

jQuery(".tab-group li").click(function() { //when a tab is clicked, set to that tab.
  setTabBody(jQuery(this));
});

function setTabBody(c) {
  d = c.parent().parent(); //tab body container
  tID = jQuery(c).attr("id").split("-"); //tabID

  d.find(".body-group").children().hide(); //hide all tab bodies

  if (!c.hasClass("tab-current")) { //if clicked tab isn't set to current...
    c.parent().children().removeClass('tab-current'); //remove all current tab classes
    c.addClass('tab-current'); //make clicked tab the current tab
  }

  if (!d.find(".body-group li#body-" + tID[1]).is(":visible")) { //if clicked tab bodyID isn't visible...
    d.find(".body-group").children().hide(); //hide all tab bodies
    d.find(".body-group li#body-" + tID[1] + ", .body-group li#body-" + tID[1] + " li").show(); //show clicked tab body and any other li inside of body.
  }
}

function getUrlVars() { //this function parses out GET vars from URL
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
    vars[key] = value;
  });
  return vars;
}*/

/*--------------------------
* TEMA 3 - PESTAÑAS
---------------------------*/


// show first content by default
$('#tabs-nav li:last-child').addClass('active');
$('.contentt').hide();
$('.contentt:first').show();

// click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.contentt').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
  
});


/*--------------------------
* TEMA 3 - SLIDER PESTAÑA 1
---------------------------*/

$(document).ready(function (){
  var $slides = $('.slider').find('li');
  var $view = $('.slider');
  var current = 0;
  var $contList = $('.cont-list');
  var $controls = $contList.find('li');

  var $prev = $('.prev');
  var $next = $('.next');

  $slides.each(function (i){
    $(this).css({transform: 'translate(' + i*100 + '%, 0%)'});
  });
  function move(pos){
    $controls.removeClass('activeSl').eq(pos).addClass('activeSl');
    $view.animate({  view: (100*pos) }, {
      step: function(now) {
        $(this).css('transform','translate(-' + now + '%, 0%)');  
      },
      duration:'slow'
    },'linear');
  }
  $next.on('click', function (e){
    e.preventDefault();
    if(current >= $slides.length-1 || $view.is(':animated')){return false;}
    current ++;
    move(current);
  });
  $prev.on('click', function (e){
    e.preventDefault();
    if(current <= 0 || $view.is(':animated')){return  false;}
    current --;
    move(current);
  });
  $controls.on('click',function (e){
    e.preventDefault();
    if($view.is(':animated')){return  false;}
    current = $(this).index();
    move(current);
  }); 
});


/*--------------------------
* NOTIFICACIÓN PESTAÑA 1
---------------------------*/

//so it runs after 1 second or 1000 ms
setTimeout(function(){
  //popout
  document.getElementsByClassName("achievement")[0].className = "achievement out";
  //play the sound (not sure about the timing)
    var audio = new Audio('https://centracomm.cachefly.net/majornelson/2007/Achievement-mp3-sound.mp3');
    audio.play();
}, 1000);

/*-----------------------------
* PESTAÑA 4 - ITEM 1 - NUMEROS 
-------------------------------*/

  $('.button1').click(function(){    
  $("#contentt").toggleClass("display");
});

$('.button1').click(function(){    
  $(this).toggleClass("buttonDisplay");
});

    $('.button2').click(function(){    
  $("#contentt2").toggleClass("display2");
});

$('.button2').click(function(){    
  $(this).toggleClass("buttonDisplay2");
});

   $('.button3').click(function(){    
  $("#contentt3").toggleClass("display3");
});

$('.button3').click(function(){    
  $(this).toggleClass("buttonDisplay3");
});

/*-----------------------------
* LIGHTBOX
-------------------------------*/

$(document).ready(function () {
    "use strict";
    $(".lightbox").click(function () {
        var imgsrc = $(this).attr('src');
        $("body").append("<div class='img-popup'><span class='close-lightbox'>&times;</span><img src='" + imgsrc + "'></div>");
        $(".close-lightbox, .img-popup").click(function () {
            $(".img-popup").fadeOut(500, function () {
                $(this).remove();
            }).addClass("lightboxfadeout");
        });

    });
    $(".lightbox").click(function () {
        $(".img-popup").fadeIn(500);
    });

});
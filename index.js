/*(function(){
  $('.menu-left').click(function(){
    
    $('.intro').toggleClass('active')
  /*   $('section').toggleClass('active')
    $('#menu-left').toggleClass('active')
   
  })
 
})()
$('.menu-left').on('click', function() {
	$('.intro').toggleClass('abrir');
});*/

/*------------------------------------
* EFECTOS DEL MENU
--------------------------------------*/

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find(".content h5");
    // Evento
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      $el
        .find(".content li")
        .not($next)
        .slideUp()
        .parent()
        .removeClass("open");
    }
  };

  var accordion = new Accordion($("#menu-left"), true);
});
$(document).ready(function(e){
  $('#itemObjetivos').on('click', function(){
    $('#content').load('objetivos.html')
  });
});
$(document).ready(function(e){
  $('#itemActividad').on('click', function(){
    $('#content').load('actividad.html')
  });
});
$(document).ready(function(e){
  $('#itemTema3').on('click', function(){
    $('#content').load('tema3.html')
  });
});
$(document).ready(function(e){
  $('#itemActividad1').on('click', function(){
    $('#content').load('actividad1.html')
  });
});
$(document).ready(function(e){
  $('#itemActividad2').on('click', function(){
    $('#content').load('actividad2.html')
  });
});
$(document).ready(function(e){
  $('#itemActividad3').on('click', function(){
    $('#content').load('actividad3.html')
  });
});

$(document).ready(function(e){
  $('#itemIntro').on('click', function(){
    $('#content').load('intro.html')
  });
});

/* SELECCIONAR ITEM*/
$('#menu-left li').on('click', function(){
    $('li').removeClass('activo');
    $(this).addClass('activo');
});

$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });
});

 (function(){
            'use strict';

            var $mainButton = $(".main-button"),
                $closeButton = $(".close-button"),
                $buttonWrapper = $(".button-wrapper"),
                $ripple = $(".ripple"),
                $layer = $(".layered-content");

            $mainButton.on("click", function(){
                $buttonWrapper.addClass("clicked").delay(900).queue(function(next){
                    $layer.addClass("active");
                    next();
                });
            });

            $closeButton.on("click", function(){
                $layer.removeClass("active");
                $buttonWrapper.removeClass("clicked");
            });
            
        })();

/*------------------------------------
* EFECTO DE ENTRADA DE LA INTRODUCCÓN
--------------------------------------*/

$(document).ready(function() {
  /* top-left logo animation */
    $('.logo-container')
      .stop(true)
      .animate({
      left:'30px'
    }, 1000);
  $('h2')
        .stop(true)
        .animate({
            opacity:"1"
        },1200);
  /* title animation */
  $('h1')
        .stop(true)
        .animate({
            opacity:"1"
        },1500);
  /* top-left logo animation */
  $('.rectangle1') 
        .stop(true)
        .animate({
            left:"99%",  
        },2200);
});
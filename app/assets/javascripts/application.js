// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

"use strict";

console.log("APP ONLINE");


$(document).ready(function(){

	$(window).on("scroll", changeNavbar);
    
	$('.scrollspy').scrollSpy();

	$('#opening-contact').on("click", openOverlay);


	$('#closing-x').on("click", closeOverlay);



    $('#instructions-nav').on("click", openInstructionsNav);
	$('#about-nav').on("click", openAboutNav);
	$('#demo-nav').on("click", openDemoNav);



	$('.instructions-container').on("click", toggleInstructions);
	$('.about-container').on("click", toggleAbout);
	$('.demo-container').on("click", toggleDemo);


	$('.demo-container').on("click", function(e) {
		console.log(e.target);
		$('#demo-x').toggleClass("rotatef");
		$('#demo-x').toggleClass("rotateb");
	});

	$('.about-container').on("click", function(e) {
		console.log(e.target);
		$('#about-x').toggleClass("rotatef");
		$('#about-x').toggleClass("rotateb");
	});

	$('.instructions-container').on("click", function(e) {
		console.log(e.target);
		$('#instructions-x').toggleClass("rotatef");
		$('#instructions-x').toggleClass("rotateb");
	});

	$("#caret").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#videogame-section").offset().top-100
    	}, 1000);
	});

	
	reachedBottom();

}); //document-ready 


function changeNavbar() {
  if($(window).scrollTop() > 155) {
            $("nav").addClass("navscroll");
        } else {
           $("nav").removeClass("navscroll");
        }
}


function closeOverlay(e) {

	console.log("closing nav");
	document.getElementById("myNav").style.height = "0%";
	// document.getElementById("closing-x").style.width = "0";
	$("body").css("overflow","auto");
}

function openOverlay(e) {

	console.log("opening nav");
	document.getElementById("myNav").style.height = "100%";
	// document.getElementById("closing-x").style.width = "auto";
	$("body").css("overflow","hidden");
}


function toggleInstructions() {
	$('#instructions-text-container').delay(100).slideToggle();
}

function toggleAbout() {
	$('#about-text-container').delay(100).slideToggle();
}

function toggleDemo() {
	$('#demo-text-container').delay(100).slideToggle();
}


function openInstructionsNav() {
	
	console.log('#instructions-text-container');

	if(!$('#instructions-text-container').is(':visible')) {
		console.log("is hidden -weird");
		$('#instructions-text-container').slideDown();
		$('#about-text-container').slideUp();
		$('#demo-text-container').slideUp();

	} else if(!$('#instructions-text-container').is(':hidden'))  {
		console.log("is visible -weird");

	} else {
		console.log("this doesn't work");
	}

}

function openAboutNav() {
	
	console.log('#about-text-container');

	if(!$('#about-text-container').is(':visible')) {
		console.log("is hidden -weird");
		$('#about-text-container').slideDown();
		$('#instructions-text-container').slideUp();
		$('#demo-text-container').slideUp();
	} 

}

function openDemoNav() {
	
	console.log('#demo-text-container');

	if(!$('#demo-text-container').is(':visible')) {
		console.log("is hidden -weird");
		$('#demo-text-container').slideDown();
		$('#instructions-text-container').slideUp();
		$('#about-text-container').slideUp();
	} 

}


function isSectionInWindow(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



function reachedBottom() {

	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	       console.log("you've reached the bottom");

	       driveCar();
	   }
	});
    	
}

function driveCar() {

	var inscreaseSize = 3;
	var moveDownBy = 200;

	
	$('#red-car').delay( 800 ).css({
		'-webkit-transform': 'scale(' + inscreaseSize + ')' + ' ' + 'translateY(' + moveDownBy + '%' + ')',
        '-moz-transform': 'scale(' + inscreaseSize + ')' + ' ' + 'translateY(' + moveDownBy + '%' + ')',
        '-ms-transform': 'scale(' + inscreaseSize + ')' + ' ' + 'translateY(' + moveDownBy + '%' + ')',
        '-o-transform': 'scale(' + inscreaseSize + ')' + ' ' + 'translateY(' + moveDownBy + '%' + ')',
        'transform': 'scale(' + inscreaseSize + ')' + ' ' + 'translateY(' + moveDownBy + '%' + ')',
	});
	
}



function hideCar() {
	console.log("hiding car");
	$('#red-car').hide();	
}


function driveCar2() {
	$('#red-car').css({ scale: 3, y: '60px' });
		
}




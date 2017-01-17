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
    
	// $('#opening-contact').on("click", toggleOverlay);

	// $('#opening-contact').on("click", function(e) {
	// 	console.log(e.target);
	// 	$('#opening-contact').toggleClass("rotatef");
	// 	$('#opening-contact').toggleClass("rotateb");
	// });

	$('#opening-contact').on("click", openOverlay);


	$('#closing-x').on("click", closeOverlay);

	$('#closing-x').on("click", function(e) {
		console.log(e.target);
		$('#closing-x').toggleClass("rotatef");
		$('#closing-x').toggleClass("rotateb");
	});




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


}); //document-ready 




// function toggleOverlay(e) {

// 	if ($(this).hasClass('menu-closed')) {
// 		console.log("opening nav");
// 		document.getElementById("myNav").style.height = "100%";
// 		$("body").css("overflow","hidden");
// 		$('#opening-contact').attr("src", "/assets/x.png");
// 	}

// 	if ($(this).hasClass('menu-opened')) {
// 		console.log("closing nav");
// 		document.getElementById("myNav").style.height = "0%";
// 		$("body").css("overflow","auto");
// 		$('#opening-contact').attr("src", "/assets/contact.png");
// 	}

// 	$('#opening-contact').toggleClass("menu-closed");
// 	$('#opening-contact').toggleClass("menu-opened");

// }

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








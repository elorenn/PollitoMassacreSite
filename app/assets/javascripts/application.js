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
    
	$('#opening-x').on("click", toggleOverlay);

	$('#opening-x').on("click", function(e) {
		console.log(e.target);
		$('#opening-x').toggleClass("rotatef");
		$('#opening-x').toggleClass("rotateb");
	});


}); //document-ready 


function toggleOverlay(e) {

	if ($(this).hasClass('menu-closed')) {
		console.log("opening nav");
		document.getElementById("myNav").style.height = "100%";
		$("body").css("overflow","hidden");
	}

	if ($(this).hasClass('menu-opened')) {
		console.log("closing nav");
		document.getElementById("myNav").style.height = "0%";
		$("body").css("overflow","auto");
	}

	$('#opening-x').toggleClass("menu-closed");
	$('#opening-x').toggleClass("menu-opened");

}




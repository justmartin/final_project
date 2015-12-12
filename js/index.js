/*
Project Name: Final Project
Client: Anchored Ship Cafe
Author: Justin Martin
Developer @GA in SEA
*/

$(document).ready(function() {

	//navigation bar functionality to slide to corresponding section instead of jump
	$('#home-nav').click(function(){
		$('html, body').animate({scrollTop: $('#home').offset().top}, 1000);
		return false;
	});
	$('#menu-nav').click(function(){
		$('html, body').animate({scrollTop: $('#menu').offset().top}, 1000);
		return false;
	});
	$('#our-coffee-nav').click(function(){
		$('html, body').animate({scrollTop: $('#our-coffee').offset().top}, 1000);
		return false;
	});
	$('#about-us-nav').click(function(){
		$('html, body').animate({scrollTop: $('#about-us').offset().top}, 1000);
		return false;
	});
	$('#visit-us-nav').click(function(){
		$('html, body').animate({scrollTop: $('#visit-us').offset().top}, 1000);
		return false;
	});
	$('#insta-gallery-nav').click(function(){
		$('html, body').animate({scrollTop: $('#insta-gallery').offset().top}, 1000);
		return false;
	});
	
	//hamburger display
	$('.hamburger').click(function(){
		$('ul').toggleClass('nav-height');
	})

	$('#nav-links a').click(function(){
		$('ul').toggleClass('nav-height');
	})

});

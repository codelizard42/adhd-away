// ==UserScript==
// @name				ADHD-Away
// @namespace			github.com/codelizard42
// @description		Improves both productivity and sleep cycles. Based on the "Productivity Improver" userscript by SuperFancyGentleman at Userscripts.org
// @version			0.0.3
// @updateURL		https://github.com/codelizard42/adhd-away/raw/master/adhd-away.user.js
// @include			http*://reddit.com/*
// @include			http*://*.reddit.com/*
// @include			http*://facebook.com/*
// @include			http*://*.facebook.com/*
// @include			http*://facepunch.com/*
// @include			http*://*.facepunch.com/*
// @include			http*://tumblr.com/*
// @include			http*://*.tumblr.com/*
// @include			http*://youtube.com/*
// @include			http*://*.youtube.com/*
// @include			http*://vimeo.com/*
// @include			http*://*.vimeo.com/*
// ==/UserScript==
var current		= new Date();
var hours		= current.getHours();

var morning_hour	= 8;
var evening_hour	= 23;

var body = document.getElementsByTagName( "body" )[0];

if ((hours <= morning_hour) || (hours => evening_hour)) {
    console.log("HEYEYEYEYAA");
	body.innerHTML = "";
	document.getElementsByTagName( "head" )[0].innerHTML = "";
	body.style.margin = "0";
	body.style.padding = "0";
	window.location.replace("http://heyyeyaaeyaaaeyaeyaa.com/");
}

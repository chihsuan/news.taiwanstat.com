"use strict";
(function(window, document, undefined) {

	var str = '<header>'
		str += '<span id="stat-title">台灣政府整合新聞- 用數據看台灣  </span>'
		str += '</header>'
		str += '<div class="container">'
		str += '<a href="https://www.facebook.com/taiwanstat">'
		str += '<div class="ui pink button">Facebook 粉絲專頁</div>'
		str += '</a>'
		str += '</div>'

	$('body').prepend(str);

  // grab an element
	var myElement = document.querySelector("header");
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myElement);
	// initialise
	headroom.init();



})(window, document)
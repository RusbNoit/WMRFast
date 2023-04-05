// ==UserScript==
// @name     skynetvideos
// @version  1
// @grant    none
// @match https://skynetvideos.squarespace.com/*
// ==/UserScript==


console.log("skynetvideos.js is loaded!!!");


function videoSurfClose()
{

	window.close();
  
  
}

function videoSurf(){

	document.getElementById('v_y').focus();
	var cont = document.getElementById("tt");

 
  if (cont.innerHTML.indexOf('Продолжить') == -1) {

    //console.log("cont = waiting")
    setTimeout(videoSurf, 500);

  } else {


    //console.log("cont = finish")
    cont.childNodes[0].click();
		//window.close();
    setTimeout(videoSurfClose, 100);

  }

  
  //var oVideo = document.getElementById('v_y');
 	//console.log('oVideo.src = ' + oVideo.src);
  //oVideo.src = oVideo.src + "&autoplay=1";
	//$('v_y')[0].src = oVideo.src + "&autoplay=1&mute=1";
  //oVideo.src = oVideo.src + "&autoplay=1&mute=1";
  //oVideo.click();

}

// set timeout to force close tab
console.log("set force close timeout: " + (new Date((new Date).getTime()+1*60000)))
setTimeout(videoSurfClose, 60000);

// run play video
setTimeout(videoSurf, 5000);


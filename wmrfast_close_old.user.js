// ==UserScript==
// @name     wmrfast_close_old
// @version  1
// @grant    window.close
// @exclude https://wmrfast.com/*
// @exclude https://www.youtube.com/*
// @exclude https://rutube.ru/*
// @exclude https://skynetvideos.squarespace.com/*
// ==/UserScript==
// about:config -> dom.allow_scripts_to_close_windows -> true



var iTimeWait = 0;

console.log('✅ run document close timer');




function checkWindowFocused() {
  
  if (document.visibilityState === 'visible') {
    
    console.log('✅ window has focus');
		iTimeWait = 0;
    
  } else {
    
    iTimeWait += 1;    
    document.title = 'timer ' + iTimeWait + 's';
    console.log('timer ' + iTimeWait + 's');    
    console.log('⛔️ window does NOT have focus');

  }

  
  if (iTimeWait > 15) {

    console.log('window close ' + iTimeWait + 's');
		window.close();
  }
  
}



var sHref = window.location.href;
  
console.log("sHref = " + sHref)



if (sHref.indexOf('wmrfast.com') == -1) {

		setInterval(checkWindowFocused, 1000);

}


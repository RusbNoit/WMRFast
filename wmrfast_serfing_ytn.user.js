// ==UserScript==
// @name     wmrfast_serfing_ytn
// @version  1
// @grant    none
// @match https://wmrfast.com/serfing_ytn.php
// ==/UserScript==



var sUrlRun = '';
console.log("wmrfast_serfing_ytn.js is loaded!!!");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function mySurfReload()
{

  if(window.location.href == 'https://wmrfast.com/serfing_ytn.php') {
  
	  window.location.href = 'https://wmrfast.com/serfingnew.php';
  }

}

function myUrlClick(elem) {
  elem.click();

}

function runNextVideoSurf()
{

 
  var formSerf = document.body.querySelectorAll('a[class=serf_hash]');
  var formSerfTotalLinks = formSerf.length;

	if (document.visibilityState !== 'visible') {

  		console.log("wait focus")
    	setTimeout(runNextVideoSurf, 2000);
    	return
  }
  

  try {
    
    
    var iLoop = 0;
    
    formSerf.forEach(function(elem) {

      	iLoop++;
      	var sElemStyle = elem.getAttribute('style');
      	//console.log('style:' + sElemStyle);
      
      	if (sElemStyle == null || sElemStyle.indexOf('line-through') == -1) {

				  console.log("[surf] run : " + iLoop + " [ " + formSerfTotalLinks + " ] ");
          
          var sElemHref = elem.getAttribute('onclick')
          
          //console.log('href = ' + sElemHref)
            console.log('[surf] sUrlRun = ' + sUrlRun);
            console.log('[surf] sElemHref = ' + sElemHref);

          
          if (sUrlRun == sElemHref) {
          	console.log('[surf] break repeated link');
            
            elem.setAttribute('style', 'text-decoration: line-through;');
            return;
          }
          
          sUrlRun = sElemHref;
          
  		    var iTimer = parseInt(elem.getAttribute('timer'));
          var iTimerClose = (0 + iTimer)*1000;
  				window.iCheckCount = 0;
        	//console.log('url timer: ' + iTimer);
          setTimeout(myUrlClick, 1000, elem);
          throw BreakException;
          

        }
    });
    
	} catch (e) {}
  
  if (iLoop >= formSerfTotalLinks) {
    
  	console.log('Finish looping all links');
    
    var iWaitTimeout = getRandomIntInclusive(4000,7000);
  	console.log("runNextSurf timeout : " + iWaitTimeout.toString() + "ms")
    setTimeout(mySurfReload, iWaitTimeout);    
    
  	return
    
  } else {
  
  	var iReloadTimeout = getRandomIntInclusive(4000,6000);
  	console.log("next runNextVideoSurf timeout : " + iReloadTimeout.toString() + "ms")
  	setTimeout(runNextVideoSurf, iReloadTimeout);
  }
  
}


setTimeout(runNextVideoSurf, 10000);




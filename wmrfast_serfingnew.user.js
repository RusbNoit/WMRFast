// ==UserScript==
// @name     wmrfast_serfingnew
// @version  1
// @grant    none
// @run-at      document-idle
// @match https://wmrfast.com/serfingnew.php
// ==/UserScript==


// about:config -> dom.allow_scripts_to_close_windows -> true

//alert('Running monkey script' + window.location.href)


var elemDiv = document.createElement('div');
elemDiv.style.cssText = 'position:absolute;width:200px;height:200px;z-index:9999;background:#fff;border:1px solid red;top:0px;left:0px;';
elemDiv.id = 'flowWindow';
document.body.appendChild(elemDiv);


var sUrlRun = '';
console.log("wmrfast_serfingnew.js is loaded!!!");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function mySurtStatus(mes)
{

  elemDiv.innerHTML = mes;

}

function myUrlClick(elem) {
  elem.click();

}

function mySurfReload()
{

  if(window.location.href == 'https://wmrfast.com/serfingnew.php') {
  
	  window.location.href = 'https://wmrfast.com/serfing_ytn.php';
  }

}


function myTabClose()
{

  
	if(window.location.href != 'https://wmrfast.com/serfingnew.php') {

    	console.log('[myTabClose] break href');
    	return;
	}  
  
  
 	if((document.title == 'Просмотр засчитан!') || (document.title.indexOf('заработка') > 0)) {
  	console.log('myTabClose Просмотр засчитан!')
		//browser.tabs.remove(2);
  	//window.top.close();
    window.focus();
    
    
    
		
    var iWaitTimeout = getRandomIntInclusive(4000,7000);
  	console.log("runNextSurf timeout : " + iWaitTimeout.toString() + "ms")
    setTimeout(runNextSurf, iWaitTimeout);
    //runNextSurf();
  
  } else {
    
    if (window.iCheckCount < 15) {
	    
      console.log('[myTabClose] sleep 500');
  		setTimeout(myTabClose, 500);
    
    } else  {
      
    	console.log('[myTabClose] break');
      mySurfReload();
    }
    
    window.iCheckCount++;
    
  }

}


function urlNormalize(input) {
  
  //'https://wmrfast.com/' 
  var out = input.replace('&amp;', '&')
  out = out.replace('%2F', '/')
  out = out.replace('%3A', ':')
  //var doc = new DOMParser().parseFromString(input, "text/html");
  return out;
}


function runNextSurf()
{

  	//console.log('document.title = ' + document.title)
  
   	if ( !((document.title.indexOf('заработка') > 0) || (document.title.indexOf('разарботка') > 0)) ) {
      console.log("break runNextSurf")
      return
    }

  

  
  
  //var element = document.querySelector('form[@id="serf_form_*"]');
  //var  formElements = document.body.querySelectorAll('form[id^=serf_form_]')
  //console.log("found items: " + formElements.length)
	//alert("found items: " + formElements.length)
  
  var formSerf = document.body.querySelectorAll('a[class=serf_hash]');
  var formSerfTotalLinks = formSerf.length;
 

  try {
    
    
    var iLoop = 0;
    
    formSerf.forEach(function(elem) {

      	iLoop++;
      	var sElemStyle = elem.getAttribute('style');
      	//console.log('style:' + sElemStyle);
      
      	if (sElemStyle == null || sElemStyle.indexOf('line-through') == -1) {

				  console.log("[surf] run : " + iLoop + " [ " + formSerfTotalLinks + " ] ");
          mySurtStatus("[surf] run : " + iLoop + " [ " + formSerfTotalLinks + " ] ");
          
          var sElemHref = elem.getAttribute('href')
          
          //console.log('href = ' + sElemHref)
          
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
          
          if (iTimer > 3) {

            console.log('[surf] set CloseWindow timer: ' + iTimerClose + ' ms');          
            setTimeout(myTabClose, iTimerClose);
            throw BreakException;
          }
        	//var url = urlNormalize(elem.href);
        	//window.open(url);


        }
    });
    
	} catch (e) {
    
 		if (e instanceof BreakException) {
	    // statements to handle this very common expected error
  	} else {
    	throw e; // re-throw the error unchanged
  	}    
    
  	//if (e !== BreakException) throw e;
	}
  
  console.log('Finish running');
  
  var iReloadTimeout = getRandomIntInclusive(20000,30000);
  console.log("mySurfReload timeout : " + iReloadTimeout.toString() + "ms")
  setTimeout(mySurfReload, iReloadTimeout);


}

if(window.location.href == 'https://wmrfast.com/serfingnew.php') {

    var iWaitTimeout = getRandomIntInclusive(4000,7000);
  	console.log("runNextSurf timeout : " + iWaitTimeout.toString() + "ms")
    setTimeout(runNextSurf, iWaitTimeout);
    //runNextSurf()
}


//console.log('Write tabs list:');
//console.log(browser.tabs);

//var browserWindows = browser.windows.getAll();
    
//browserWindows.forEach(function(elem) {

//  console.log('browserWindows = ' + elem.title);
//});



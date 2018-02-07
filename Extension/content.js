
var j = document.createElement('script');
j.src = chrome.extension.getURL('utils/jquery-1.10.2.min.js');
(document.head || document.documentElement).appendChild(j);

var g = document.createElement('script');
g.src = chrome.extension.getURL('utils/gmail.js');
(document.head || document.documentElement).appendChild(g);

var g = document.createElement('script');
g.src = chrome.extension.getURL('utils/openpgp.min.js');
(document.head || document.documentElement).appendChild(g);

var active = false; 

function start(){
    active = true;
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('encrypt.js');
    (document.head || document.documentElement).appendChild(s);
    
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('decrypt.js');
    (document.head || document.documentElement).appendChild(s);
    
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('search.js');
    (document.head || document.documentElement).appendChild(s);
    
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('main.js');
    (document.head || document.documentElement).appendChild(s);
    
    
      //alert("started");
  }


  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "start" ) {
        if(active == false){
            start();            
        }
     }
    }
  );
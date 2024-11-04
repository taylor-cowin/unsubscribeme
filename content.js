// content.js

function findUnsubscribeLinks() {
    
  // Find all links on the page
    var links = window.document.querySelectorAll("a");
    //DEBUG
    console.log(links.length + " links acquired: " + links);
    // Send each unsubscribe link to the background script to open in a new tab
    for (const link of links){
      //DEBUG
      console.log("LINK SET: " + link.href);
      chrome.runtime.sendMessage({type: 'openTab', url: link.href });
    }
    
    // Send the unsubscribe link data to the popup for feedback
    chrome.runtime.sendMessage({ type: 'emailList', emails: unsubscribeEmails });
  }
  
  //DEBUGGING
  console.log("Gmail has been detected -- running content.js");

 // Run findUnsubscribeLinks when the page loads
 //window.addEventListener('load', findUnsubscribeLinks)
 findUnsubscribeLinks(); 
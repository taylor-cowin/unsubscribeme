// content.js

/*
function getActiveTab () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0]
    if (currentTab) {
      //check for null
      return currentTab
    }
  })
}
*/

async function getTabId () {
  const tabs = await chrome.tabs.query({
    url: ['https://mail.google.com/*', 'https://gmail.com/*']
    //Need to add recursion handling
  })
  if (tabs) {
    tabId = tabs[0].id;
    console.log("Tabs found: " + tabs + ". tabs[0].id: " + tabId); 
    return tabId;
  }
  else {
    console.log("Error: No tabs detected.");
  }
}

function findUnsubscribeLinks () {
  //DEBUGGING
  console.log('findUnsubscribeLinks() pushed to stack')

  // Find all links on the page
  /*var links = window.document.querySelectorAll('a')
  var links = chrome.scripting.executeScript(
    {injection: 'Array.from(document.getElementsByTagName("a")).map(a => a.innerHTML)'},function (results){
    var vk = [];
    var facebook = [];
    var linkedin = [];
    var allElements = results[0];
    for (var i=0; i<allElements.length; i++) 
    {
    if (allElements[i].indexOf("https://vk.com") !== -1) 
    {
        vk.push (allElements[i]);
    }
    if (allElements[i].indexOf("https://facebook.com") !== -1 ) 
    {
        facebook.push (allElements[i]);
    }
    if (allElements[i].indexOf("https://www.linkedin.com") !== -1 ) 
    {
        linkedin.push (allElements[i]);
    }
    }
}
  );
  
  
  //DEBUG
  console.log(links.length + ' links acquired: ');


  // Send each unsubscribe link to the background script after checking to see if it's an unsubscribe link
  for (const link of links) {
    //"i" after the RegEx makes it case-insensitive
    if (
      /unsubscribe/i.test(link.textContent) ||
      /unsubscribe/i.test(link.href)
    ) {
      //DEBUG
      console.log('LINK SET: ' + link.href)
      //It says "unsubscribe," so open a tab.
      chrome.runtime.sendMessage({ type: 'openTab', url: link.href })
    }
  }
}
*/
}

console.log('Gmail has been detected -- running content.js')

chrome.scripting
  .executeScript({
    target: { tabId: getTabId() },
    func: findUnsubscribeLinks()
  })
  .then(() => console.log('Found links!'))

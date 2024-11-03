// popup.js

chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'emailList') {
      const emailList = document.getElementById('email-list');
      emailList.innerHTML = ''; // Clear any existing list items
  
      message.emails.forEach((email) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${email.subject}: Unsubscribe attempted`;
        emailList.appendChild(listItem);
      });
    }
  });
  
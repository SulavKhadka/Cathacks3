//chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
//	alert(response);
//});

chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file: "script.js"});
});
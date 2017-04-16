//chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
//	alert(response);
//});
console.log("meme big boy");
chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file: "script.js"});
   console.log("meme big boy");
});
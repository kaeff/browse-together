var browser = (typeof browser === "object") ? browser : chrome;

function loadScript(name) {
  var s = document.createElement('script');
  // TODO: add "script.js" to web_accessible_resources in manifest.json
  s.src = browser.extension.getURL(name);
  //s.onload = function() {
    //this.remove();
  //};
  (document.head || document.documentElement).appendChild(s);
}
loadScript('togetherjs-min.js');
loadScript('button.js');

browser.runtime.onMessage.addListener(request => {
	window.postMessage(request);
	return Promise.resolve({response: "Hi from content script"});
});

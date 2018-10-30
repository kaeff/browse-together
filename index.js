function loadScript(name) {
  var s = document.createElement('script');
  // TODO: add "script.js" to web_accessible_resources in manifest.json
  s.src = chrome.extension.getURL(name);
  //s.onload = function() {
    //this.remove();
  //};
  (document.head || document.documentElement).appendChild(s);
}
loadScript('togetherjs-min.js');
loadScript('button.js');
console.log("ran index.js");


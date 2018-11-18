var browser = (typeof browser === "object") ? browser : chrome;

browser.browserAction.onClicked.addListener(initTogetherJs);

function initTogetherJs(tab) {
	browser.tabs.sendMessage(tab.id, "initTogetherJs", {});
}

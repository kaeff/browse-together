function initTogetherJs(tab) {
	TogetherJS(window.document.body); return false;
}

window.addEventListener("message", function(e) {
	if (e.data === "initTogetherJs") {
		initTogetherJs();
	}
});

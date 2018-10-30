

(function() {
    function htmlToElements(html) {
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    }

    function appendNodes(container, childNodes) {
        for (var i = 0; i < childNodes.length; i++) {
            container.appendChild(childNodes[i])
        }
    }

    let htmlText = `<button id="initTogetherJS" style="position: absolute; bottom: 6px; right: 5px;">Start TogetherJS (extension)</button>`;
    //let htmlText = "";
    let html = htmlToElements(htmlText);
    appendNodes(document.body, html);
    document.getElementById("initTogetherJS").addEventListener("click", (e) => { TogetherJS(e.target); return false; });
})();

console.log('loaded button.js');

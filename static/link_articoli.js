document.addEventListener('DOMContentLoaded', function() {
    var wrapHeader = function (header) {

        var firstTextNode = header.firstChild;
        var newAnchor = document.createElement('a');

        newAnchor.href = "#" + header.id;

        newAnchor.appendChild( document.createTextNode(firstTextNode.nodeValue) );

        header.replaceChild( newAnchor, firstTextNode );
    };

    var content = document.getElementsByClassName('content')[0];
    var headers = content.getElementsByTagName('h5');
    Array.from(headers).forEach(wrapHeader);
});

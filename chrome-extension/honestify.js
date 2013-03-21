$.getJSON('https://raw.github.com/bryanstedman/honestify/master/phrases.json', function(data) {
  var phrases = data;

  function htmlreplace(a, element) {    
    if (!element) element = document.body;    
    var nodes = element.childNodes;
    for (var n=0; n<nodes.length; n++) {
      if (nodes[n].nodeType == Node.TEXT_NODE) {
        for (key in a) {
          var r = new RegExp('\\b'+key+'\\b', 'gi');
          nodes[n].textContent = nodes[n].textContent.replace(r, a[key]);
        }
      } else {
        htmlreplace(a, nodes[n]);
      }
    }
  }

htmlreplace(phrases);

});
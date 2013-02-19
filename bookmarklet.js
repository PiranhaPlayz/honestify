$.getJSON('https://rawgithub.com/bryanstedman/honestify/master/phrases.json', function(data) {
  function htmlreplace(a, element) {    
    if (!element) element = document.body;    
    var nodes = element.childNodes;
    for (var n=0; n<nodes.length; n++) {
      if (nodes[n].nodeType == Node.TEXT_NODE) {
        for (key in a) {
          var r = new RegExp(key, 'gi');
          nodes[n].textContent = nodes[n].textContent.replace(r, a[key]);
        }
      } else {
        htmlreplace(a, nodes[n]);
      }
    }
  }
htmlreplace(data);
});
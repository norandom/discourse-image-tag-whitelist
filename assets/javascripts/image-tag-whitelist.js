import whiteListTag from 'pretty-text/sanitizer';

(function() {

  Discourse.Markdown.whiteListTag('span', 'class', 'dropcap'); 
  Discourse.Markdown.whiteListTag('span', 'class', 'sclass');

})();

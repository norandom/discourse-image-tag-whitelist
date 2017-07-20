import { registerOption } from 'pretty-text/pretty-text';

(function() {

  Discourse.Markdown.whiteListTag('span', 'class', 'dropcap'); 
  Discourse.Markdown.whiteListTag('span', 'class', 'sclass');
  

})();

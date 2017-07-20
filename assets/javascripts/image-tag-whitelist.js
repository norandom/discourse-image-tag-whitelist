import WhiteLister from 'pretty-text/white-lister';

export default {
  name: 'dropcap',

  initialize() {
    const whiteLister = new WhiteLister();
    whiteLister.whiteListFeature("dropcap", [
      'span.dropcap'
    ]);
  }
};

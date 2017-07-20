// start point  
export default {
  name: 'dropcap',
  initialize() {
    // syntax is tag.class in an array
    helper.whiteList(['span.dropcaps', 'span.sclass']);
  }
};

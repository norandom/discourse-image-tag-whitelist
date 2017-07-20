// start point  
export default {
  name: 'dropcap',
  initialize() {
    setup(helper);
  }
};

export function setup(helper) {
  helper.registerOptions((opts, siteSettings)=>{
    opts.features['dropcaps'] = true; //!!siteSettings.dropcaps_enabled;
  });

  helper.whiteList([ 'span.dropcaps', 'span.sclass' ]);
}
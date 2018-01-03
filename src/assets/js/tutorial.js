var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_data = [
    {
      selector:'.sign',
      event_type:'next',
      description:'In order to use, please sign in first'
    },
    {
      selector:'#research',
      event:'click',
      description:'You can start your research within a click'
    },
    {
      selector:'#control-panel',
      event_type:'next',
      description:'You can control the timeline using the <b>control panel</b>'
    },
    {
      selector:'#fitAllItems',
      event_type:'next',
      description:'You can fit the timeline size to the displayed items'
    },
    {
      selector:'#zoomings',
      event_type:'next',
      description:'You can zoom in and out'
    },
    {
      selector:'#movings',
      event_type:'next',
      description:'Move right and left'
    },
    {
      selector:'#toggleZoomingLink',
      event_type:'next',
      description:'Turn on and off the zooming with the mouse'
    },
    {
      selector:'#toggleNetoBrutoLink',
      event_type:'next',
      description:'<b>And most importantly</b>:<br>You can switch between <b>neto</b> to <b>bruto</b> mode'
    },
    {
      selector:'#visualization',
      event_type:'next',
      description:'This is the timeline, you can drag, zoom, and more'
    }
  ];
  
  
  //set script config
  enjoyhint_instance.setScript(enjoyhint_script_data);

function runTutorial() {
  //run Enjoyhint script
  enjoyhint_instance.runScript();
}
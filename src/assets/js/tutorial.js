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
      selector:'#toggleView',
      event:'click',
      description:'You can switch between neto to bruto display'
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
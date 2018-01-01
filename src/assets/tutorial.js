var enjoyhint_instance = new EnjoyHint({});

var enjoyhint_script_steps = [
    {
      'click .new_btn' : 'Click the "New" button to start creating your project'
    }  
  ];
  
  //set script config
  enjoyhint_instance.set(enjoyhint_script_steps);
  
  //run Enjoyhint script
  enjoyhint_instance.run();
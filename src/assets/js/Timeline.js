var timeline;
var options;
var groups;
var combinedItems;
var items;
var brutos;
var heights;
var customTimes;
var isNeto = true;

brutos = [{"name":"TCP","start":"2018-01-02T16:36:53.979Z","end":"2018-01-03T01:18:47.774Z","description":"Comoros Savings Account haptic","netosArray":[{"name":"payment","start":"2018-01-02T16:42:53.979Z","end":"2018-01-02T16:53:53.979Z","description":"bypass"},{"name":"feed","start":"2018-01-02T17:01:53.979Z","end":"2018-01-02T17:19:53.979Z","description":"Steel Island"},{"name":"Concrete","start":"2018-01-02T17:27:53.979Z","end":"2018-01-02T17:36:53.979Z","description":"Granite Table"},{"name":"front-end","start":"2018-01-02T17:44:53.979Z","end":"2018-01-02T17:58:53.979Z","description":"IB"},{"name":"optimal","start":"2018-01-02T18:07:53.979Z","end":"2018-01-02T18:15:53.979Z","description":"compressing"},{"name":"Quetzal","start":"2018-01-02T18:17:53.979Z","end":"2018-01-02T18:30:53.979Z","description":"Iceland Saint Helena Pound"},{"name":"Expanded","start":"2018-01-02T18:39:53.979Z","end":"2018-01-02T18:50:53.979Z","description":"Incredible Steel Shoes multi-byte"},{"name":"Colorado","start":"2018-01-02T18:56:53.979Z","end":"2018-01-02T19:14:53.979Z","description":"Maryland Solutions"},{"name":"dynamic","start":"2018-01-02T19:21:53.979Z","end":"2018-01-02T19:39:53.979Z","description":"Assistant Jordanian Dinar"},{"name":"transition","start":"2018-01-02T19:43:53.979Z","end":"2018-01-02T20:01:53.979Z","description":"Borders aggregate"},{"name":"override","start":"2018-01-02T20:09:53.979Z","end":"2018-01-02T20:21:53.979Z","description":"Tuna index"},{"name":"coherent","start":"2018-01-02T20:25:53.979Z","end":"2018-01-02T20:39:53.979Z","description":"Devolved"},{"name":"Shoes","start":"2018-01-02T20:49:53.979Z","end":"2018-01-02T20:53:53.979Z","description":"Sausages Sleek magnetic"},{"name":"Officer","start":"2018-01-02T20:54:53.979Z","end":"2018-01-02T20:59:53.979Z","description":"Manager protocol"},{"name":"well-modulated","start":"2018-01-02T21:01:53.979Z","end":"2018-01-02T21:12:53.979Z","description":"Cambridgeshire Bacon Lao People's Democratic Republic"},{"name":"bricks-and-clicks","start":"2018-01-02T21:17:53.979Z","end":"2018-01-02T21:23:53.979Z","description":"payment solutions Panama"},{"name":"SSL","start":"2018-01-02T21:29:53.979Z","end":"2018-01-02T21:41:53.979Z","description":"Locks programming Frozen"},{"name":"Pine","start":"2018-01-02T21:49:53.979Z","end":"2018-01-02T22:02:53.979Z","description":"SAS mission-critical transparent"},{"name":"plug-and-play","start":"2018-01-02T22:09:53.979Z","end":"2018-01-02T22:29:53.979Z","description":"East Caribbean Dollar silver"},{"name":"Gloves","start":"2018-01-02T22:33:53.979Z","end":"2018-01-02T22:47:53.979Z","description":"open system"},{"name":"Illinois","start":"2018-01-02T22:51:53.979Z","end":"2018-01-02T22:55:53.979Z","description":"Somali Shilling"},{"name":"Money Market Account","start":"2018-01-02T22:58:53.979Z","end":"2018-01-02T23:00:53.979Z","description":"Chips Jordan open system"},{"name":"transmitting","start":"2018-01-02T23:04:53.979Z","end":"2018-01-02T23:10:53.979Z","description":"Investor auxiliary FTP"},{"name":"Avon","start":"2018-01-02T23:17:53.979Z","end":"2018-01-02T23:26:53.979Z","description":"Borders Kina"},{"name":"implement","start":"2018-01-02T23:34:53.979Z","end":"2018-01-02T23:43:53.979Z","description":"clear-thinking quantifying"},{"name":"Strategist","start":"2018-01-02T23:53:53.979Z","end":"2018-01-03T00:04:53.979Z","description":"cross-media Sausages task-force"},{"name":"Personal Loan Account","start":"2018-01-03T00:06:53.979Z","end":"2018-01-03T00:19:53.979Z","description":"payment XML navigating"},{"name":"supply-chains","start":"2018-01-03T00:25:53.979Z","end":"2018-01-03T00:41:53.979Z","description":"connect payment Cambridgeshire"},{"name":"Steel","start":"2018-01-03T00:43:53.979Z","end":"2018-01-03T00:57:53.979Z","description":"deposit National repurpose"},{"name":"functionalities","start":"2018-01-03T01:06:53.979Z","end":"2018-01-03T01:10:53.979Z","description":"quantifying Steel"}],"addedToDB":"2018-01-03T00:01:23.713Z"},{"name":"Agent","start":"2018-01-02T21:47:09.641Z","end":"2018-01-03T06:50:44.065Z","description":"Mississippi Handcrafted Wooden Mouse Frozen","netosArray":[{"name":"transmitter","start":"2018-01-02T21:51:09.641Z","end":"2018-01-02T22:06:09.641Z","description":"Fantastic Wooden Table Personal Loan Account Awesome Wooden Pants"},{"name":"Industrial","start":"2018-01-02T22:16:09.641Z","end":"2018-01-02T22:31:09.641Z","description":"backing up"},{"name":"deposit","start":"2018-01-02T22:40:09.641Z","end":"2018-01-02T22:51:09.641Z","description":"Salad primary Implementation"},{"name":"Baby","start":"2018-01-02T23:01:09.641Z","end":"2018-01-02T23:16:09.641Z","description":"Home"},{"name":"Seamless","start":"2018-01-02T23:17:09.641Z","end":"2018-01-02T23:29:09.641Z","description":"cultivate Credit Card Account open-source"},{"name":"Strategist","start":"2018-01-02T23:30:09.641Z","end":"2018-01-02T23:31:09.641Z","description":"system discrete"},{"name":"red","start":"2018-01-02T23:33:09.641Z","end":"2018-01-02T23:34:09.641Z","description":"neural"},{"name":"parse","start":"2018-01-02T23:41:09.641Z","end":"2018-01-02T23:48:09.641Z","description":"gold Face to face European Monetary Unit (E.M.U.-6)"},{"name":"dynamic","start":"2018-01-02T23:54:09.641Z","end":"2018-01-03T00:03:09.641Z","description":"users invoice"},{"name":"cross-media","start":"2018-01-03T00:11:09.641Z","end":"2018-01-03T00:12:09.641Z","description":"primary"},{"name":"integrate","start":"2018-01-03T00:22:09.641Z","end":"2018-01-03T00:41:09.641Z","description":"Analyst"},{"name":"HTTP","start":"2018-01-03T00:47:09.641Z","end":"2018-01-03T00:51:09.641Z","description":"human-resource Norfolk Island"},{"name":"CSS","start":"2018-01-03T00:52:09.641Z","end":"2018-01-03T01:08:09.641Z","description":"Metal Lodge invoice"},{"name":"Future-proofed","start":"2018-01-03T01:18:09.641Z","end":"2018-01-03T01:38:09.641Z","description":"South Carolina virtual Savings Account"},{"name":"olive","start":"2018-01-03T01:41:09.641Z","end":"2018-01-03T01:56:09.641Z","description":"Alabama"},{"name":"France","start":"2018-01-03T02:04:09.641Z","end":"2018-01-03T02:05:09.641Z","description":"interfaces connect 1080p"},{"name":"Directives","start":"2018-01-03T02:10:09.641Z","end":"2018-01-03T02:16:09.641Z","description":"green Hat"},{"name":"Developer","start":"2018-01-03T02:24:09.641Z","end":"2018-01-03T02:38:09.641Z","description":"Forward envisioneer Vermont"},{"name":"Rubber","start":"2018-01-03T02:44:09.641Z","end":"2018-01-03T03:01:09.641Z","description":"unleash"},{"name":"disintermediate","start":"2018-01-03T03:09:09.641Z","end":"2018-01-03T03:16:09.641Z","description":"Concrete withdrawal"},{"name":"Auto Loan Account","start":"2018-01-03T03:19:09.641Z","end":"2018-01-03T03:22:09.641Z","description":"parse Ranch"},{"name":"Coordinator","start":"2018-01-03T03:23:09.641Z","end":"2018-01-03T03:41:09.641Z","description":"Highway"},{"name":"models","start":"2018-01-03T03:49:09.641Z","end":"2018-01-03T03:59:09.641Z","description":"bi-directional"},{"name":"iterate","start":"2018-01-03T04:04:09.641Z","end":"2018-01-03T04:08:09.641Z","description":"target Bike Assimilated"},{"name":"Rustic","start":"2018-01-03T04:14:09.641Z","end":"2018-01-03T04:27:09.641Z","description":"Gorgeous"},{"name":"Response","start":"2018-01-03T04:36:09.641Z","end":"2018-01-03T04:47:09.641Z","description":"silver Frozen"},{"name":"models","start":"2018-01-03T04:51:09.641Z","end":"2018-01-03T05:05:09.641Z","description":"Sharable"},{"name":"Buckinghamshire","start":"2018-01-03T05:10:09.641Z","end":"2018-01-03T05:21:09.641Z","description":"Avon Singapore Dollar"},{"name":"zero defect","start":"2018-01-03T05:30:09.641Z","end":"2018-01-03T05:33:09.641Z","description":"Bacon"},{"name":"Awesome Cotton Table","start":"2018-01-03T05:43:09.641Z","end":"2018-01-03T05:53:09.641Z","description":"Technician"}],"addedToDB":"2018-01-03T02:23:09.435Z"},{"name":"encompassing","start":"2018-01-02T22:51:22.915Z","end":"2018-01-03T09:04:29.671Z","description":"generate Generic Soft Mouse","netosArray":[{"name":"Steel","start":"2018-01-02T22:52:22.915Z","end":"2018-01-02T22:56:22.915Z","description":"Money Market Account fault-tolerant"},{"name":"Crossing","start":"2018-01-02T23:04:22.915Z","end":"2018-01-02T23:08:22.915Z","description":"Internal TCP Sleek"},{"name":"Licensed","start":"2018-01-02T23:12:22.915Z","end":"2018-01-02T23:15:22.915Z","description":"Court Usability sensor"},{"name":"static","start":"2018-01-02T23:20:22.915Z","end":"2018-01-02T23:21:22.915Z","description":"Cambridgeshire"},{"name":"Books","start":"2018-01-02T23:29:22.915Z","end":"2018-01-02T23:48:22.915Z","description":"quantify B2B"},{"name":"wireless","start":"2018-01-02T23:58:22.915Z","end":"2018-01-03T00:11:22.915Z","description":"Brunei Dollar Cambridgeshire XSS"},{"name":"Savings Account","start":"2018-01-03T00:13:22.915Z","end":"2018-01-03T00:22:22.915Z","description":"Brunei Darussalam Sports"},{"name":"Uruguay","start":"2018-01-03T00:23:22.915Z","end":"2018-01-03T00:26:22.915Z","description":"Strategist Glen Product"},{"name":"transmitter","start":"2018-01-03T00:33:22.915Z","end":"2018-01-03T00:47:22.915Z","description":"PCI bleeding-edge"},{"name":"SQL","start":"2018-01-03T00:51:22.915Z","end":"2018-01-03T01:08:22.915Z","description":"River Indiana Ohio"},{"name":"Tactics","start":"2018-01-03T01:17:22.915Z","end":"2018-01-03T01:36:22.915Z","description":"Total web-enabled unleash"},{"name":"Congolese Franc","start":"2018-01-03T01:45:22.915Z","end":"2018-01-03T01:52:22.915Z","description":"neural"},{"name":"primary","start":"2018-01-03T01:57:22.915Z","end":"2018-01-03T02:11:22.915Z","description":"Saint Barthelemy"},{"name":"innovate","start":"2018-01-03T02:19:22.915Z","end":"2018-01-03T02:24:22.915Z","description":"Home Movies"},{"name":"backing up","start":"2018-01-03T02:34:22.915Z","end":"2018-01-03T02:51:22.915Z","description":"Proactive Electronics"},{"name":"Fresh","start":"2018-01-03T03:00:22.915Z","end":"2018-01-03T03:05:22.915Z","description":"SMTP wireless"},{"name":"Checking Account","start":"2018-01-03T03:06:22.915Z","end":"2018-01-03T03:23:22.915Z","description":"EXE indigo"},{"name":"Frozen","start":"2018-01-03T03:28:22.915Z","end":"2018-01-03T03:31:22.915Z","description":"Administrator overriding"},{"name":"Shoes","start":"2018-01-03T03:41:22.915Z","end":"2018-01-03T03:44:22.915Z","description":"Licensed help-desk Moldova"},{"name":"Analyst","start":"2018-01-03T03:46:22.915Z","end":"2018-01-03T03:56:22.915Z","description":"JBOD"},{"name":"generating","start":"2018-01-03T03:58:22.915Z","end":"2018-01-03T04:08:22.915Z","description":"Montserrat"},{"name":"redefine","start":"2018-01-03T04:15:22.915Z","end":"2018-01-03T04:28:22.915Z","description":"Analyst"},{"name":"HDD","start":"2018-01-03T04:38:22.915Z","end":"2018-01-03T04:52:22.915Z","description":"Cheese"},{"name":"sky blue","start":"2018-01-03T05:01:22.915Z","end":"2018-01-03T05:14:22.915Z","description":"Metal"},{"name":"Cambridgeshire","start":"2018-01-03T05:20:22.915Z","end":"2018-01-03T05:38:22.915Z","description":"visualize service-desk grey"},{"name":"copy","start":"2018-01-03T05:47:22.915Z","end":"2018-01-03T06:04:22.915Z","description":"Licensed Steel Salad rich multi-byte"},{"name":"Comoro Franc","start":"2018-01-03T06:14:22.915Z","end":"2018-01-03T06:24:22.915Z","description":"Peso Uruguayo Uruguay Peso en Unidades Indexadas CFA Franc BCEAO Sleek"},{"name":"engineer","start":"2018-01-03T06:30:22.915Z","end":"2018-01-03T06:37:22.915Z","description":"deposit SCSI"},{"name":"Rustic Cotton Bacon","start":"2018-01-03T06:44:22.915Z","end":"2018-01-03T06:46:22.915Z","description":"object-oriented Cambridgeshire"},{"name":"killer","start":"2018-01-03T06:49:22.915Z","end":"2018-01-03T06:53:22.915Z","description":"Pike"}],"addedToDB":"2018-01-03T05:30:56.564Z"},{"name":"Outdoors","start":"2018-01-03T00:05:27.838Z","end":"2018-01-03T06:30:08.628Z","description":"well-modulated Tasty Licensed Cotton Salad","netosArray":[{"name":"Realigned","start":"2018-01-03T00:08:27.838Z","end":"2018-01-03T00:18:27.838Z","description":"Coordinator quantifying"},{"name":"primary","start":"2018-01-03T00:28:27.838Z","end":"2018-01-03T00:39:27.838Z","description":"Engineer quantify Sleek Soft Salad"},{"name":"Credit Card Account","start":"2018-01-03T00:48:27.838Z","end":"2018-01-03T01:05:27.838Z","description":"mobile Borders"},{"name":"Sports","start":"2018-01-03T01:09:27.838Z","end":"2018-01-03T01:23:27.838Z","description":"Senior open-source"},{"name":"strategize","start":"2018-01-03T01:24:27.838Z","end":"2018-01-03T01:25:27.838Z","description":"cutting-edge Wooden payment"},{"name":"Solutions","start":"2018-01-03T01:26:27.838Z","end":"2018-01-03T01:31:27.838Z","description":"Savings Account"},{"name":"open-source","start":"2018-01-03T01:32:27.838Z","end":"2018-01-03T01:48:27.838Z","description":"pink payment"},{"name":"paradigms","start":"2018-01-03T01:52:27.838Z","end":"2018-01-03T01:56:27.838Z","description":"incremental withdrawal Tools"},{"name":"matrix","start":"2018-01-03T02:04:27.838Z","end":"2018-01-03T02:19:27.838Z","description":"Small Wooden Towels wireless"},{"name":"TCP","start":"2018-01-03T02:25:27.838Z","end":"2018-01-03T02:26:27.838Z","description":"purple"},{"name":"card","start":"2018-01-03T02:27:27.838Z","end":"2018-01-03T02:29:27.838Z","description":"Money Market Account"},{"name":"navigating","start":"2018-01-03T02:37:27.838Z","end":"2018-01-03T02:57:27.838Z","description":"user-centric"},{"name":"Agent","start":"2018-01-03T03:02:27.838Z","end":"2018-01-03T03:16:27.838Z","description":"B2B dedicated primary"},{"name":"Algeria","start":"2018-01-03T03:24:27.838Z","end":"2018-01-03T03:25:27.838Z","description":"open architecture"},{"name":"deposit","start":"2018-01-03T03:35:27.838Z","end":"2018-01-03T03:45:27.838Z","description":"Road Buckinghamshire"},{"name":"Swedish Krona","start":"2018-01-03T03:54:27.838Z","end":"2018-01-03T04:10:27.838Z","description":"Wooden Awesome Cotton Shirt"},{"name":"Vermont","start":"2018-01-03T04:16:27.838Z","end":"2018-01-03T04:17:27.838Z","description":"Health Money Market Account Towels"},{"name":"bypassing","start":"2018-01-03T04:21:27.838Z","end":"2018-01-03T04:22:27.838Z","description":"Engineer Auto Loan Account Auto Loan Account"},{"name":"Unbranded Frozen Car","start":"2018-01-03T04:26:27.838Z","end":"2018-01-03T04:29:27.838Z","description":"web-readiness"},{"name":"connect","start":"2018-01-03T04:36:27.838Z","end":"2018-01-03T04:49:27.838Z","description":"West Virginia COM"},{"name":"Supervisor","start":"2018-01-03T04:54:27.838Z","end":"2018-01-03T04:57:27.838Z","description":"programming web-readiness bluetooth"},{"name":"intuitive","start":"2018-01-03T05:00:27.838Z","end":"2018-01-03T05:11:27.838Z","description":"B2C European Monetary Unit (E.M.U.-6) Kids"},{"name":"4th generation","start":"2018-01-03T05:14:27.838Z","end":"2018-01-03T05:34:27.838Z","description":"generate Berkshire Cambridgeshire"},{"name":"Jewelery","start":"2018-01-03T05:44:27.838Z","end":"2018-01-03T05:47:27.838Z","description":"invoice Handmade Granite Towels best-of-breed"},{"name":"collaborative","start":"2018-01-03T05:48:27.838Z","end":"2018-01-03T05:53:27.838Z","description":"ability"},{"name":"compressing","start":"2018-01-03T06:00:27.838Z","end":"2018-01-03T06:16:27.838Z","description":"initiative Norwegian Krone"}],"addedToDB":"2018-01-03T04:52:43.303Z"},{"name":"Applications","start":"2018-01-03T06:17:31.084Z","end":"2018-01-03T09:41:38.356Z","description":"Missouri SQL","netosArray":[{"name":"Licensed Concrete Pants","start":"2018-01-03T06:24:31.084Z","end":"2018-01-03T06:35:31.084Z","description":"Cambridgeshire Alabama"},{"name":"Israel","start":"2018-01-03T06:45:31.084Z","end":"2018-01-03T06:58:31.084Z","description":"Intelligent Metal Table"},{"name":"parse","start":"2018-01-03T07:08:31.084Z","end":"2018-01-03T07:22:31.084Z","description":"Cambridgeshire"},{"name":"Cotton","start":"2018-01-03T07:24:31.084Z","end":"2018-01-03T07:36:31.084Z","description":"Legacy"},{"name":"Intelligent Plastic Pants","start":"2018-01-03T07:44:31.084Z","end":"2018-01-03T07:48:31.084Z","description":"Concrete compress back-end"},{"name":"withdrawal","start":"2018-01-03T07:58:31.084Z","end":"2018-01-03T08:13:31.084Z","description":"Ramp Rubber"},{"name":"Rubber","start":"2018-01-03T08:20:31.084Z","end":"2018-01-03T08:40:31.084Z","description":"Computers neural Home Loan Account"},{"name":"South Dakota","start":"2018-01-03T08:48:31.084Z","end":"2018-01-03T08:50:31.084Z","description":"Analyst Chair"},{"name":"system","start":"2018-01-03T08:57:31.084Z","end":"2018-01-03T09:11:31.084Z","description":"withdrawal"},{"name":"Forward","start":"2018-01-03T09:16:31.084Z","end":"2018-01-03T09:26:31.084Z","description":"Generic Wooden Shirt"},{"name":"Swiss Franc","start":"2018-01-03T09:28:31.084Z","end":"2018-01-03T09:29:31.084Z","description":"action-items"},{"name":"wireless","start":"2018-01-03T09:32:31.084Z","end":"2018-01-03T09:41:31.084Z","description":"Legacy channels"}],"addedToDB":"2018-01-03T07:06:22.179Z"}]		

function getTimeline(){
  return timeline;
}

function getOptions(){
  return options;
}

Promise.prototype.finally = function(cb){this.then(cb).catch(cb)}
let timelineLoadPromise = new Promise((resolve, reject) => {

  $.ajax({
    url: "http://localhost:3000",
  }).done((data) => {
    brutos = data
    resolve()
  }).error(()=>{
    reject()
  })
})

function toggleView(isNetoMode) {
  isNeto = isNetoMode;
  if(!isNetoMode) {
    timeline.setData({
      groups: groups,
      items: combinedItems
    });
    addTechTimes()
  } else {
    timeline.setData({
      groups: null,
      items: items
    });
    timeline.setGroups(null);
    removeTechTimes()
  }
  timeline.redraw();
}

function addTechTimes() {
  brutos = brutos.sort((a,b)=>{return vis.moment(a.start).diff(b.start)})
  for (let index = 0; index < brutos.length; index++) {
    var bruto = brutos[index]
    timeline.addCustomTime(bruto.addedToDB, index)
  }
  setTimeout(()=>{
    var drags = $('.vis-custom-time').children()
    drags.each((index, element)=>{
      element.style.height = 0
    })

    customTimes = $('.vis-custom-time')
    customTimes.css({"cursor": "default", "z-index": "2", "background-color": "#000000"})
    updateCustomTimesOnRangeChange();
  })
}

function removeTechTimes() {
  for (let index=0; index < brutos.length; index++) {
    timeline.removeCustomTime(index)
  }
}

function updateCustomTimesOnRangeChange(){
  var sumHeights = 0;
  setTimeout(()=>{
    heights = $('.vis-foreground').children().filter('.vis-group')
    customTimes.each((index, element) => {
      element.style.height = heights[index].style.height;
      element.style.top = sumHeights.toString() + "px";
      sumHeights += parseInt(heights[index].style.height);
    })
  })
}

function move (percentage) {
  var range = timeline.getWindow()
  var interval = range.end - range.start

  timeline.setWindow(
    range.start.valueOf() - interval * percentage,
    range.end.valueOf()   - interval * percentage,
    {animation: false}
  )
}
function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.opacity = "0";
  popup.style.visibility = "hidden";
}
function initTimeline(callback) {
    // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');
  var toggleView = document.getElementById('toggleView');

  function log (a){console.log(a);return a}
  function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
      } : null;
  }

  // Return the color of the text according to the brightness of the given color
  function getTextColor(rgb) {
    var result = ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;

    if (result < 125) {
      return "#fff";
    } else {
      return "333";
    }
  }

  var colors = ['#0074D9','#001f3f','#FF851B','#85144b','#e5e5e5']

  // Create a DataSet (allows two way data-binding)
  items = new vis.DataSet()
  groups = new vis.DataSet()
  combinedItems = new vis.DataSet()

  var minDate = vis.moment(new Date(8640000000000000))
  var maxDate = vis.moment(new Date(-8640000000000000))
  var lowestDuration = Number.MAX_SAFE_INTEGER
  for (let index = 0; index < brutos.length; index++) {
    var bruto = brutos[index]
    groups.add({
      id :     index,
      content: bruto.name,
      start:   bruto.start,
      end:     bruto.end
    })
    combinedItems.add({
      content: bruto.name,
      start:   bruto.start,
      end:     bruto.end,
      style: 'background-color: '+colors[index]+'; color: ' + getTextColor(hexToRgb(colors[index])) + ';',
      group:   index,
      description: bruto.description,
      align: 'left'
    })

    if (minDate.diff(bruto.start) > 0)
      minDate = vis.moment(bruto.start)
    if (maxDate.diff(bruto.end) < 0)
      maxDate = vis.moment(bruto.end)

    bruto.netosArray.forEach(neto => {
      if (lowestDuration > vis.moment(neto.end).diff(neto.start, 'ms'))
        lowestDuration = vis.moment(neto.end).diff(neto.start, 'ms')
      items.add({
        content: neto.name + ' (' + bruto.name + ')',
        start:   neto.start,
        end:     neto.end,
        style: 'background-color: '+colors[index]+'; color: ' + getTextColor(hexToRgb(colors[index])) + ';',
        align: 'left',
        description: neto.description,
      })
      combinedItems.add({
        content: neto.name,
        start:   neto.start,
        end:     neto.end,
        group:   index,
        style: 'background-color: '+colors[index]+'; color: ' + getTextColor(hexToRgb(colors[index])) + ';',
        description: bruto.description,
        align: 'left',
        description: neto.description,
      })
    })
  }

  function customOrder (a, b) {
    return vis.moment(a.start).diff(vis.moment(b.start),'ms');
  }

  // Configuration for the Timeline
  options = {
    showCurrentTime: false,
    order: customOrder,
    selectable: false,
    zoomMax: maxDate.diff(minDate,'ms'),
    zoomMin: lowestDuration,
    margin: {item: 2},
    selectable: false,
    groupOrder: 'start',  // groupOrder can be a property name or a sorting function
    align: 'left',
    zoomable: true
  };
  // set starting values
  options.min = vis.moment(minDate).subtract(options.zoomMax / 2, 'ms')
  options.max = vis.moment(maxDate).add(options.zoomMax / 2, 'ms')
  // Create a Timeline
  timeline = new vis.Timeline(container, items, options);

  timeline.on('rangechange',function(properties){
    closePopup()
    var start = vis.moment(properties.start)
    var end = vis.moment(properties.end)
    var diff = end.diff(start, 'ms')
    options.min = vis.moment(minDate).subtract(diff / 2, 'ms')
    options.max = vis.moment(maxDate).add(diff / 2, 'ms')
    if(!isNeto){
      updateCustomTimesOnRangeChange();
    }
    timeline.setOptions(options)
  })

  function openPopup(properties) {
    // If the clicked area is an item
    if (properties.item) {
      var item;
      if (isNeto)
        item = items.get(properties.item);
      else
        item = combinedItems.get(properties.item);

      // Setting the popup heading
      document.getElementsByClassName('popup-heading')[0].textContent = item.content;

      // Setting the popup content
      var content = document.getElementsByClassName('popup-content')[0];
      content.innerHTML="<h2>Description: </h2> " + item.description;

      // Setting the position of the popup in the needed point and displaying it
      var element = document.getElementById('popup-container');
      var parent = document.getElementById('popup');
      parent.style.top = properties.pageY + "px";
      parent.style.left = (properties.pageX - (element.clientWidth / 2)) + "px";
      parent.style.opacity = "1";
      parent.style.visibility = "visible";
    }
  }

  timeline.on("doubleClick", openPopup);
  callback()
}

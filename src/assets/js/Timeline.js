var timeline;
var options;
var groups;
var combinedItems;
var items;
var tracks;
var brutos;
var heights;
var customTimes;
var isNeto = true;

function getTimeline(){
  return timeline;
}

function getOptions(){
  return options;
}

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
function initTimeline(brutosData, callback) {
    // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');
  var toggleView = document.getElementById('toggleView');
  brutos = brutosData;

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

  var colors = ['#4CB5F5','#B7B8B6','#34675C','#B3C100','#375E97','#FB6542','#FFBB00','#3F681C','#BCBABE','#A1D6E2','#1995AD']

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

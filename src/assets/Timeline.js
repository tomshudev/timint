function initTimeline() {
    // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet();
  var date = vis.moment('2015-03-02');
  for (var i = 0; i < 100; i++) {
    date.add(Math.round(Math.random() * 2), 'hour');
    items.add({
      id:      i,
      content: 'Item ' + i,
      start:   date.clone(),
      end:     date.clone().add(4, 'hour')
    });
  }

  function customOrder (a, b) {
    // order by id
    return a.id - b.id;
  }

  // Configuration for the Timeline
  var options = {
    order: customOrder,
    editable: true,
    margin: {item: 0}
  };

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, options);

  var ordering = document.getElementById('ordering');
  ordering.onchange = function () {
    timeline.setOptions({
      order: ordering.checked ? customOrder: null
    });
  };
}
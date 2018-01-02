import { Component, OnInit } from '@angular/core';
declare var getTimeline: any;
declare var getOptions: any;

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  timeline = null;
  options = null;

  constructor() { }

  ngOnInit() {
    this.timeline = getTimeline();
    this.options = getOptions();
  }

  fitAllItems() {
    this.timeline.fit();
  }

  zoomIn() {
    this.timeline.zoomIn(0.5);
  }

  zoomOut() {
    this.timeline.zoomOut(0.5);
  }

  move (percentage) {
    const range = this.timeline.getWindow();
    const interval = range.end - range.start;

    this.timeline.setWindow({
      start: range.start.valueOf() - interval * percentage,
      end:   range.end.valueOf()   - interval * percentage
    });
  }


  moveRight() {
    this.move(-0.5);
  }

  moveLeft() {
    this.move(0.5);
  }

  toggleScrollingMode() {
    if (this.options.zoomable) {
      this.options.zoomable = false;
    } else {
      this.options.zoomable = true;
    }
    this.timeline.setOptions(this.options);
  }
}

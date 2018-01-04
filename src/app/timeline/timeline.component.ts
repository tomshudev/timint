import { Component, OnInit } from '@angular/core';
import {SelectComponent} from 'ng-select-bypass';
import { fadeInAnimation } from '../_animations/index';

declare var $:any;
declare var initTimeline:any;
declare var closePopup:any;
declare var move:any;
declare var timeline:any;
declare var timelineLoadPromise:any;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['../app.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    timelineLoadPromise.finally(()=>initTimeline(() => {
      timeline.searching = false
    }))

    function KeyPress(e) {
      var evtobj = window.event? event : e;

      if (evtobj.keyCode == 70 && evtobj.ctrlKey) {
        SelectComponent.prototype.openDropdownBypass();
        // Preventing the original action
        e.preventDefault();
      }
    }
    
    document.onkeydown = KeyPress;
  }
  keysListener($event) {
    if (timeline.searching)
      return
    if ($event.code == "Escape")
      closePopup()
    if ($event.code == "ArrowLeft"){
      move(0.05)
    }
    if ($event.code == "ArrowRight"){
      move(-0.05)
    }
    if ($event.code == "ArrowUp"){
      timeline.zoomIn (0.2, {animation: false})
    }
    if ($event.code == "ArrowDown"){
      timeline.zoomOut (0.2, {animation: false})
    }
  }
}

import { Component, OnInit, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import {SelectModule, SelectComponent} from 'ng-select-bypass';
import {IOption} from 'ng-select-bypass';
declare var timeline:any;
declare var vis:any;
declare var timelineLoadPromise:Promise<any>;
declare var $:any;

function log(a){console.log(a); return a;}

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  setSearching(bool){
    this.ar.tick()
    this.cd.detectChanges();
    timeline.searching = bool
  }
  constructor(private cd: ChangeDetectorRef, private ar:ApplicationRef) {
  }
  myOptions: Array<NetoOption> = [];
  ngOnInit() {
    timelineLoadPromise.then(()=> {
      let items = timeline.itemSet.items
      Object.keys(items).forEach(id => {
        this.myOptions.push({value: id, label: items[id].content, start: timeline.itemsData._data[id].start, end: timeline.itemsData._data[id].end});        
      });
      SelectComponent.prototype.getComponent().updateOptionListBypass(this.myOptions)
    })
  }
  onSelected(option: IOption) {
    var netoOption = option as NetoOption
    var start = vis.moment(netoOption.start)
    var end = vis.moment(netoOption.end)
    var range = end.diff(start,'ms')
    timeline.setWindow(start.subtract(range/2,'ms'), end.add(range/2,'ms'));
  }

  onDeselected(option: IOption) {
      timeline.fit();
  }
  
}

class NetoOption implements IOption{
  value;
  label;
  start;
  end;
}
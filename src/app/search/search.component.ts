import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {SelectModule} from 'ng-select';
import {IOption} from 'ng-select';
declare var timeline:any;
declare var vis:any;
declare var $:any;

function log(a){console.log(a); return a;}

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  setSearching(bool){
    this.cd.detectChanges();
    timeline.searching = bool
  }
  constructor(private cd: ChangeDetectorRef) {
  }
  myOptions: Array<NetoOption> = [];
  ngOnInit() {
    let items = timeline.itemSet.items
    Object.keys(items).forEach(id => {
      this.myOptions.push({value: id, label: items[id].content, start: timeline.itemsData._data[id].start, end: timeline.itemsData._data[id].end});
    });
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
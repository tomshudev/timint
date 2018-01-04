import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  tracks = [
    { id: 0, name: 'Liran\'s day', start: '04/01/2017 3:24:35' },
    { id: 1, name: 'Dekel\'s day', start: '01/01/2017 2:13:35' },
    { id: 2, name: 'Tom\'s day', start: '04/01/2017 3:24:35' },
    { id: 3, name: 'Hen Shukerrrrrrrrrrrrrrrrrrrrr\'s day', start: '01/01/2017 2:13:35' }
  ]

  constructor() { }

  ngOnInit() {
  }

  openTimeline(id) : void {
    console.log(id);
  }
}

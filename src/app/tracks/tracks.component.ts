import { Component, OnInit } from '@angular/core';
import { TracksService } from '../_services/tracks.service';

declare var $:any;

@Component({
  selector: 'tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  tracks = null

  constructor(private tracksService: TracksService) {
    tracksService.getTracks(tracks => {
      this.tracks = tracks;

      $(function() {
        $.contextMenu({
          selector: '.track-row',
          animation: {duration: 500, show: 'slideDown'},
          callback: function(key, options) {
            console.log('The track ' + (this.children()[0].innerText) + ' will be removed');
          },
          items: {
            "edit": {name: 'Edit', icon: 'edit'},
            "delete": {name: 'Delete', icon: 'delete'},
            "sep1": "---------",
            "quit": {name: "Quit", icon: function(){
                return 'context-menu-icon context-menu-icon-quit';
            }}
          }
        })
      })
    });
  }

  ngOnInit() {
  }

  openTimeline(id) : void {
    console.log(id);
  }
}

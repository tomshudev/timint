import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
declare var initTimeline:any;

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['../app.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero =  {
    id: 1,
    name: 'Liran'
  };

  constructor() { }

  ngOnInit() {
    initTimeline();
  }

}

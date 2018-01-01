import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isHomeScreen=false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isHomeScreen = this.router.url === '/home' || this.router.url === '/';

    this.router.events.subscribe((event)=>{
      if (event instanceof NavigationStart) {
        if (event.url === '/home' || event.url === '/') {
          this.isHomeScreen = true;
        } else {
          this.isHomeScreen = false;
        } 
      }
    });
  }

  closePopup() : void {
    var popup = document.getElementById("popup");
    popup.style.opacity = "0";
    popup.style.visibility = "hidden";
  }
}

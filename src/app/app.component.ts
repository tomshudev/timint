import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
declare var jquery:any;
declare var $:any;
declare var runTutorial:any;
declare var closePopup:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isHomeScreen=false;

  constructor(private router: Router, private cookiesService: CookieService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        closePopup();
      }
    })
  }

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

    if (!this.cookiesService.get('isExpert')) {
      runTutorial();
      this.cookiesService.set('isExpert', 'true');
    }

  }

  closePopup() : void {
    var popup = document.getElementById("popup");
    popup.style.opacity = "0";
    popup.style.visibility = "hidden";
  }

  deleteCookies() :void {
    this.cookiesService.deleteAll();
  }

  runTutorial():void {
    this.router.navigate(['/']);
    runTutorial();
  }
}

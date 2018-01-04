import { Component, OnInit } from '@angular/core';
declare var getTimeline: any;
declare var getOptions: any;
declare var $:any;
declare var toggleBrutoNetoText:any;
declare var toggleZoomingText:any;
declare var toggleView:any;
declare var initControlPanel:any;
declare var timelineLoadPromise:any;

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  brutoNetoEnum = {
    NETO: 'Toggle to Bruto mode',
    BRUTO: 'Toggle to Neto mode'
  }

  zoomingEnum = {
    ON: 'Turn off zooming using the mouse',
    OFF: 'Turn on zooming using the mouse'
  }

  timeline = null;
  options = null;
  brutoNetoMode = null;
  zoomingMode = null;

  constructor() { }

  ngOnInit() {
    timelineLoadPromise.finally(()=> {
      this.timeline = getTimeline();
      this.options = getOptions();
      this.brutoNetoMode = this.brutoNetoEnum.NETO;
      toggleBrutoNetoText(this.brutoNetoMode);
      this.zoomingMode = this.zoomingEnum.ON;
      toggleZoomingText(this.zoomingMode);

      initControlPanel();
    })
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

  toggleZoomingMode() {
    if (this.zoomingMode === this.zoomingEnum.ON) {
      $('#toggleZoomingIcon').removeClass('ion-unlocked');
      $('#toggleZoomingIcon').addClass('ion-locked');

      this.zoomingMode = this.zoomingEnum.OFF;
      toggleZoomingText(this.zoomingMode);
    } else {
      $('#toggleZoomingIcon').addClass('ion-unlocked');
      $('#toggleZoomingIcon').removeClass('ion-locked');

      this.zoomingMode = this.zoomingEnum.ON;
      toggleZoomingText(this.zoomingMode);
    }

    if (this.options.zoomable) {
      this.options.zoomable = false;
    } else {
      this.options.zoomable = true;
    }
    this.timeline.setOptions(this.options);
  }

  toggleNetoBruto() {
      if (this.brutoNetoMode === this.brutoNetoEnum.NETO) {
        $('#toggleNetoBrutoIcon').addClass('ion-toggle-filled');
        $('#toggleNetoBrutoIcon').removeClass('ion-toggle');

        this.brutoNetoMode = this.brutoNetoEnum.BRUTO;
        toggleBrutoNetoText(this.brutoNetoMode);
      } else {
        $('#toggleNetoBrutoIcon').removeClass('ion-toggle-filled');
        $('#toggleNetoBrutoIcon').addClass('ion-toggle');

        this.brutoNetoMode = this.brutoNetoEnum.NETO;
        toggleBrutoNetoText(this.brutoNetoMode);
      }

      var isNetoMode = this.brutoNetoMode === this.brutoNetoEnum.NETO;

      toggleView(isNetoMode);
  }
}

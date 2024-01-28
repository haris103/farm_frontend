import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-honesty-selection',
  templateUrl: './honesty-selection.page.html',
  styleUrls: ['./honesty-selection.page.scss'],
})
export class HonestySelectionPage implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}

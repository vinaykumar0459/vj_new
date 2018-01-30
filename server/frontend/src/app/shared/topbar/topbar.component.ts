import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  currency: string = "INR, Rs";
  currencies: string[] = ["INR, Rs", "EUR, €", "USD, $", "FJD, $", "AUD, $", "AED, د.إ", "CAD, $", "GBP, £"]
  constructor() { }

  ngOnInit() {
  }

}

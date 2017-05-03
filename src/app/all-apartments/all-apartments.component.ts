import { Component, OnInit } from '@angular/core';
import { Apartment, APARTMENTS } from '../apartments';

@Component({
  selector: 'mbc-all-apartments',
  templateUrl: './all-apartments.component.html',
  styleUrls: ['./all-apartments.component.scss']
})
export class AllApartmentsComponent implements OnInit {
  apartments: Apartment[];

  constructor() {
    this.apartments = APARTMENTS;
  }

  ngOnInit() {
  }

}

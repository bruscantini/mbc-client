import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mbc-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public isNavbarCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  @Input() public projectsLength: number;
  constructor() { }

  ngOnInit() {
  }

}

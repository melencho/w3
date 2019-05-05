import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  // let proy = environment.projects;

  public numberOfProjects: any;
  public projectos: any;

  constructor() {
  }

  ngOnInit() {
    this.projectos = environment.projects;
    this.numberOfProjects = this.projectos.length;
  }

}

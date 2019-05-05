import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  public proyectos: any;
  public numberOfProjects: number;

  constructor() {
    this.proyectos = environment.projects;
    this.numberOfProjects = environment.projects.length;
  }

  ngOnInit() {
  }

}

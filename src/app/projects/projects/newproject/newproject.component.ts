import { Component, OnInit } from '@angular/core';
import { Project } from './models/proyecto.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styles: []
})
export class NewprojectComponent implements OnInit {

  public newProject: Project;
  public projectList: Project[];
  public numProjects: number;

  constructor() {}

  ngOnInit() {
    this.numProjects = environment.projects.length;
    this.newProject = {
      id: this.numProjects,
      name: 'Dani'
    };
    this.projectList = environment.projects;
  }

  public addProject() {
    this.projectList.push({ ...this.newProject });
    this.numProjects = this.projectList.length;
    }

}

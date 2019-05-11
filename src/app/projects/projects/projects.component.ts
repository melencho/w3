import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styles: []
})
export class ProjectsComponent implements OnInit {

  public proyectos: any;
  public newProject: any;
  public projectName: string;
  public numberOfProjects: number;

  constructor(private projectServicio: ProjectsService) {
    this.proyectos = environment.projects;
    this.numberOfProjects = environment.projects.length;
  }

  ngOnInit() {
  }

  private filtrarListado(filtro: string){
    this.proyectos = this.projectServicio.filtrarListaProyectos(filtro);
  }
  public onFilter(filtro: string){
    //Coger el listado de proyectos y aplicar un filtro
    this.filtrarListado(filtro);
  }

  public createProject(evento: any){
    this.projectServicio.nuevoProyecto(this.newProject);
    this.numberOfProjects = environment.projects.length;
    console.log('Se ha creado');
  }

}

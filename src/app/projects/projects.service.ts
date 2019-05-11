import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  public filtrarListaProyectos(filtro: string){
    if (filtro !== ''){
      return environment.projects.filter(c => c.name === filtro);
    } else {
      return environment.projects;
    }

  }

  public nuevoProyecto(newProyect: any){
    environment.projects.push({ ...newProyect});
  }

  public getProject(id: number){
    console.log('ID: ' + id);
    console.log(environment.projects[id]);
    return environment.projects[id];
  }
}

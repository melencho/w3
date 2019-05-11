import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-viewerprojectform',
  templateUrl: './viewerprojectform.component.html',
  styles: []
})
export class ViewerprojectformComponent implements OnInit {

  public project: any;
  public id: number;
  constructor(activateRoute: ActivatedRoute, private projectService: ProjectsService) {
    this.id = activateRoute.snapshot.params.id;
    console.log(this.id);
    this.project = this.projectService.getProject(this.id);
  }

  ngOnInit() {
  }

}

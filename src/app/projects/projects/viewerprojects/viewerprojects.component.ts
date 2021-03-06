import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-viewerprojects',
  templateUrl: './viewerprojects.component.html',
  styles: []
})
export class ViewerprojectsComponent implements OnInit {

  public project: any;
  public id: number;
  constructor(activateRoute: ActivatedRoute, private projectService: ProjectsService) {
    this.id = activateRoute.snapshot.params.id;
    this.project = this.projectService.getProject(this.id);
  }

  ngOnInit() {
  }

}

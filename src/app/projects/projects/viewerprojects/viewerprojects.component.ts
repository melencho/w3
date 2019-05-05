import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-viewerprojects',
  templateUrl: './viewerprojects.component.html',
  styles: []
})
export class ViewerprojectsComponent implements OnInit {

  public project: any;
  public id: number;
  constructor(activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params.id;
    this.project = environment.projects[this.id];
  }

  ngOnInit() {
  }

}

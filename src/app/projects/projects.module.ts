import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectsComponent } from './projects/viewerprojects/viewerprojects.component';
import { NewprojectComponent } from './projects/newproject/newproject.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectsComponent, ViewerprojectsComponent, NewprojectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }

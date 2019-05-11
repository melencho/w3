import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectsComponent } from './projects/viewerprojects/viewerprojects.component';
import { NewprojectComponent } from './projects/newproject/newproject.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './projects/dashboard/dashboard.component';
import { FilterprojectsformComponent } from './projects/filterprojectsform/filterprojectsform.component';
import { ViewerprojectformComponent } from './projects/viewerprojectform/viewerprojectform.component';
import { NewprojectformComponent } from './projects/newprojectform/newprojectform.component';
import { ProjectslistComponent } from './projects/projectslist/projectslist.component';

@NgModule({
  declarations: [ProjectsComponent,
    ViewerprojectsComponent,
    NewprojectComponent,
    DashboardComponent,
    FilterprojectsformComponent,
    ViewerprojectformComponent,
    NewprojectformComponent,
    ProjectslistComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectsComponent } from './projects/viewerprojects/viewerprojects.component';
import { NewprojectComponent } from './projects/newproject/newproject.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'new',
    component: NewprojectComponent
  },
  {
    path: ':id',
    component: ViewerprojectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

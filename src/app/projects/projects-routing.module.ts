import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './projects/dashboard/dashboard.component';
import { NewprojectformComponent } from './projects/newprojectform/newprojectform.component';
import { ViewerprojectformComponent } from './projects/viewerprojectform/viewerprojectform.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'new',
    component: NewprojectformComponent
  },
  {
    path: ':id',
    component: ViewerprojectformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

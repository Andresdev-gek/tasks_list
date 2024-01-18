import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksTableComponent } from './pages/tasks-table/tasks-table.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TasksByIdComponent } from './pages/tasks-by-id/tasks-by-id.component';
import { AppGuardGuard } from './guards/app-guard.guard';

const routes: Routes = [
  {
    path: 'principal',
    component: LayoutComponent,
    children: [
      { path: 'tasksList', component: TasksTableComponent, canActivate: [AppGuardGuard] },
      { path: 'tasksById/:id', component: TasksByIdComponent },
      {
        path: '**',
        redirectTo: 'principal',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

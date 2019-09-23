import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { AllComponent } from './all/all.component';
import { OneComponent } from './one/one.component';


const routes: Routes = [
  {
    path: 'pets/new',
    component: NewComponent
  },
  {
    path: 'pets/:id/edit',
    component: EditComponent
  },
  {
    path: 'pets/:id',
    component: OneComponent
  },
  {
    path: 'pets',
    component: AllComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/pets'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

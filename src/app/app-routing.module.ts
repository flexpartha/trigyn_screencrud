import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo:'/clientlist', pathMatch:'full'
  },
  {
    path: 'clientlist',
    loadChildren: ()=> import('./list/list.module').then(mod =>mod.ListModule),
  },
  {
    path: 'addclient',
    loadChildren: ()=> import('./add/add.module').then(mod =>mod.AddModule),
  },
  {
    path: 'editclient',
    loadChildren: ()=> import('./edit/edit.module').then(mod =>mod.EditModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

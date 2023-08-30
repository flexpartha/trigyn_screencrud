import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddclientComponent } from './addclient/addclient.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path: '', children:[
      {
        path: '', component:AddclientComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AddclientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AddModule { }

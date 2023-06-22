import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditclientComponent } from './editclient/editclient.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path: '', component:EditclientComponent
  }
]

@NgModule({
  declarations: [
    EditclientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class EditModule { }

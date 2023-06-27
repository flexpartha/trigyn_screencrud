import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { CounterLibModule } from 'counter-lib';

const routes:Routes = [
  {
    path: '', component:ClientlistComponent
  }
]

@NgModule({
  declarations: [
    ClientlistComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    CounterLibModule
  ]
})
export class ListModule { }

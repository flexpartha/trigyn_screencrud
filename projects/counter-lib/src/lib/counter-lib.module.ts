import { NgModule } from '@angular/core';
import { CounterLibComponent } from './counter-lib.component';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';



@NgModule({
  declarations: [
    CounterLibComponent,
    CounterDemoComponent
  ],
  imports: [
  ],
  exports: [
    CounterLibComponent, 
    CounterDemoComponent
  ]
})
export class CounterLibModule { }

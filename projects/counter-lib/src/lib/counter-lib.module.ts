import { NgModule } from '@angular/core';
import { CounterLibComponent } from './counter-lib.component';
import { CounterDemoComponent } from './counter-demo/counter-demo.component';
import { RandombackgroundComponent } from './randombackground/randombackground.component';



@NgModule({
  declarations: [
    CounterLibComponent,
    CounterDemoComponent,
    RandombackgroundComponent
  ],
  imports: [
  ],
  exports: [
    CounterLibComponent, 
    CounterDemoComponent,
    RandombackgroundComponent
  ]
})
export class CounterLibModule { }

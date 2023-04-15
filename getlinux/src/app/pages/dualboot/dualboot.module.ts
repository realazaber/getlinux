import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DualbootRoutingModule } from './dualboot-routing.module';
import { DualbootComponent } from './dualboot.component';


@NgModule({
  declarations: [
    DualbootComponent
  ],
  imports: [
    CommonModule,
    DualbootRoutingModule
  ]
})
export class DualbootModule { }

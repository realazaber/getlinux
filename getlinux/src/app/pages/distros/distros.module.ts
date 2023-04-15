import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrosRoutingModule } from './distros-routing.module';
import { DistrosComponent } from './distros.component';


@NgModule({
  declarations: [
    DistrosComponent
  ],
  imports: [
    CommonModule,
    DistrosRoutingModule
  ]
})
export class DistrosModule { }

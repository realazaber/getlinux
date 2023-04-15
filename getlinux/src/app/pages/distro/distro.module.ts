import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistroRoutingModule } from './distro-routing.module';
import { DistroComponent } from './distro.component';


@NgModule({
  declarations: [
    DistroComponent
  ],
  imports: [
    CommonModule,
    DistroRoutingModule
  ]
})
export class DistroModule { }

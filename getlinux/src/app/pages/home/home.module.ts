import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LogocardComponent } from 'src/app/components/home/logocard/logocard.component';

@NgModule({
  declarations: [HomeComponent, LogocardComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}

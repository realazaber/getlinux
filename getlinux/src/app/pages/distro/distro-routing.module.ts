import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistroComponent } from './distro.component';

const routes: Routes = [{ path: '', component: DistroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistroRoutingModule { }

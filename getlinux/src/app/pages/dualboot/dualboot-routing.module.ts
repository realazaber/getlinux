import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DualbootComponent } from './dualboot.component';

const routes: Routes = [{ path: '', component: DualbootComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DualbootRoutingModule { }

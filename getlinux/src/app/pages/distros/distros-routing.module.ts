import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistrosComponent } from './distros.component';

const routes: Routes = [{ path: '', component: DistrosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrosRoutingModule { }

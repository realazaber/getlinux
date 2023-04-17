import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'distros',
    loadChildren: () =>
      import('./pages/distros/distros.module').then((m) => m.DistrosModule),
  },
  {
    path: 'distro',
    loadChildren: () =>
      import('./pages/distro/distro.module').then((m) => m.DistroModule),
  },
  {
    path: 'dualboot',
    loadChildren: () =>
      import('./pages/dualboot/dualboot.module').then((m) => m.DualbootModule),
  },
  { path: 'getstarted', loadChildren: () => import('./pages/getstarted/getstarted.module').then(m => m.GetstartedModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

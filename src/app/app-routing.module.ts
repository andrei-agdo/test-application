import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'page1',
    loadChildren: () =>
      import('./page1/page1.module').then((m) => m.Page1Module),
    outlet: 'page1',
  },
  {
    path: 'page1',
    loadChildren: () =>
      import('./page1/page1.module').then((m) => m.Page1Module),
    outlet: 'page2',
  },
  {
    path: 'page2',
    loadChildren: () =>
      import('./page2/page2.module').then((m) => m.Page2Module),
    outlet: 'page2',
  },
  {
    path: 'page2',
    loadChildren: () =>
      import('./page2/page2.module').then((m) => m.Page2Module),
    outlet: 'page1',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { DatagridComponent } from './datagrid/datagrid.component';
 
const appRoutes: Routes = [
  { path: 'datagrid', component: DatagridComponent },
  { path: '',   redirectTo: '/datagrid', pathMatch: 'full' },
  { path: 'lazy', loadChildren: './lazy-module-routes/lazy-module-routes.module#LazyModuleRoutesModule'},
  // Next route is only to trick the cli into spitting the LazyModuleModule out into its own file.
  {
    path: 'dummy-route',
    loadChildren: './lazy-module/lazy-module.module#LazyModuleModule',
    canActivate: [
      {
        canActivate: () => false
      }
    ]
  }  
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
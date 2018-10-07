import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainAdminPanelComponent} from './main-admin-panel/main-admin-panel.component';
import {Route, RouterModule} from '@angular/router';
import {UsersAdministrationComponent} from './users-administration/users-administration.component';
import {ResourcesAdministrationComponent} from './resources-administration/resources-administration.component';
import {MainAdminComponent} from './main-admin.component';

const adminRoutes: Route[] = [
  {
    path: 'admin', component: MainAdminPanelComponent,
    children: [
      {path: 'users', component: UsersAdministrationComponent},
      {path: 'resources', component: ResourcesAdministrationComponent}]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [MainAdminPanelComponent, UsersAdministrationComponent, ResourcesAdministrationComponent, MainAdminComponent]
})
export class AdminModule {
}

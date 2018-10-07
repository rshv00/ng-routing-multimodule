import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserMainWindowComponent} from './user-main-window/user-main-window.component';
import {DataAccessModule} from '../data-access/data-access.module';
import {UsersNewsComponent} from './users-news/users-news.component';
import {Route, RouterModule} from '@angular/router';
import {MainUserComponent} from './main-user.component';

const userRoutes: Route[] = [
  {
    path: 'client', component: MainUserComponent,
    children: [
      {path: '1', component: UsersNewsComponent},
      {path: '2', component: UserMainWindowComponent},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    DataAccessModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UserMainWindowComponent, UsersNewsComponent, MainUserComponent]
})
export class UserModule {
}

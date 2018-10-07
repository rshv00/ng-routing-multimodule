import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserModule} from './client/user.module';
import {AdminModule} from './admin/admin.module';
import {Route, RouterModule} from '@angular/router';
import {MainAdminComponent} from './admin/main-admin.component';
import {MainUserComponent} from './client/main-user.component';

const appRoutes: Route[] = [
  {path: 'admin', component: MainAdminComponent},
  {path: 'client', component: MainUserComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ServersComponent,
    HomeComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

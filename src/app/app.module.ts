import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ServersService } from './servers/servers.service';
import { ServersListComponent } from './servers/servers-list/servers-list.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';

const appRoute : Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'servers', component: ServersComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ServersListComponent,
    HomeComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

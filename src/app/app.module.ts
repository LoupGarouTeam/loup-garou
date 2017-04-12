import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { TimerComponent } from './timer/timer.component';
import { TchatComponent } from './tchat/tchat.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'test', component: TchatComponent },
  { path: 'roletest', component: RoleComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    TimerComponent,
    TchatComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

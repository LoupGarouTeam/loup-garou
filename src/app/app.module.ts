import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RoleComponent } from './role/role.component';
=======
import { TimerComponent } from './timer/timer.component';
import { TchatComponent } from './tchat/tchat.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'test', component: TchatComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];
>>>>>>> 64ab2b9bf8b82a3ccf01870ecfb0f277b64b9aef

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    RoleComponent
=======
    TimerComponent,
    TchatComponent,
    AuthComponent,
>>>>>>> 64ab2b9bf8b82a3ccf01870ecfb0f277b64b9aef
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

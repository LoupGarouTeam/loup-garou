import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { TimerComponent } from './timer/timer.component';
import { AuthComponent } from './auth/auth.component';
import { BoardComponent } from './board/board.component';
import { ListeJoueursComponent } from './liste-joueurs/liste-joueurs.component';
import { TchatJoueursComponent } from './tchat-joueurs/tchat-joueurs.component';
import { ListeRolesComponent } from './liste-roles/liste-roles.component';

const appRoutes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'roletest', component: RoleComponent },
  { path: 'board', component: BoardComponent },
  { path: 'timer', component: TimerComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }

];


@NgModule({
    declarations: [
        AppComponent,
        RoleComponent,
        TimerComponent,
        AuthComponent,
        BoardComponent,
        ListeJoueursComponent,
        TchatJoueursComponent,
        ListeRolesComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LevelComponent } from './level/level.component';
import { GameComponent } from './game/game.component';
import { SucessComponent } from './sucess/sucess.component';
import { DefeatComponent } from './defeat/defeat.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: LevelComponent },
  { path: 'sucess/:word', component: SucessComponent },
  { path: 'defeat/:word', component: DefeatComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    GameComponent,
    SucessComponent,
    DefeatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { EndPageComponent } from './end-page/end-page.component';

const routes: Routes = [
  {
    path :'',
    component : SplashPageComponent
  },
  {
    path : 'quiz-page',
    component : QuizPageComponent
  },
  {
    path : 'end-page',
    component : EndPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

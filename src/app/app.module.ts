import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { FormsModule } from '@angular/forms';
import { EndPageComponent } from './end-page/end-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    QuizPageComponent,
    EndPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

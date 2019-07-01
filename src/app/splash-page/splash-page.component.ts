import { Component, OnInit } from '@angular/core';
import { HandleApiService } from '../handle-api.service';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';


@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {
  categoryData: any[];
  _category : number;
  _difficulty : string;

  constructor(public handleApi : HandleApiService, public userData : UserDataService, public router : Router) { }

  ngOnInit() {
    this.showCategories();
  }
  
  showCategories() {
    this.handleApi.getCategories().subscribe(
      (response:any) =>{
        this.categoryData = response.trivia_categories;
        console.log(this.categoryData)
      });
  }

  saveQuestionsData(){
    if ( !this.userData.userName || !this._category || !this._difficulty){
      return alert('Please, fill every field')
    }
    this.handleApi.getQuestions(this._category, this._difficulty).subscribe(
      response => {
        this.handleApi.questions = response.results;
        if (this.handleApi.questions.length == 0) {
          return this.saveQuestionsData();
        }
        this.router.navigate(['/quiz-page']);
      }
    );
    
  }
}

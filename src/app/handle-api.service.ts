import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HandleApiService {

  constructor(private http : HttpClient) { }

  public categoryUrl : string = 'https://opentdb.com/api_category.php';
  public questionsUrl : string = 'https://opentdb.com/api.php?amount=10&type=multiple';
  public questions: any[];
  

  public getQuestionsUrl(category, difficulty) : string {
    return `${this.questionsUrl}&category=${category}&difficulty=${difficulty}`;
  }

  public getCategories() : any{
    return this.http.get(this.categoryUrl);  
  }

  public getQuestions(category : number, difficulty : string) : any{
    return this.http.get(this.getQuestionsUrl(category, difficulty));  
  }
}

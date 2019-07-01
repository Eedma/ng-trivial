import { Component, OnInit } from '@angular/core';
import { HandleApiService } from '../handle-api.service'
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {

  constructor(public handleApi : HandleApiService, public userData : UserDataService, public router : Router) { }

  public indexQuestion : number = 0;
  public answers : any = [];
  public nextButton : boolean = false;
  public disableButton : boolean = false;

  public correctAnswerSelected : string;
  public incorrectAnswerSelected : string;


  ngOnInit() {
    this.userData.userScore = 0;
    this.buildAnswers()
    //console.log(this.answers)
    console.log(this.handleApi.questions)
  }


  buildAnswers(){
    this.nextButton = false;
    this.disableButton = false;

    this.correctAnswerSelected = '';
    this.incorrectAnswerSelected = '';

    if ( !this.handleApi.questions ){
      return this.router.navigate(['/']);
    }

    let question = this.handleApi.questions[this.indexQuestion];
    
    this.answers = [question.correct_answer, ...question.incorrect_answers];
    this.shuffle(this.answers);
    // if ( question === undefined || this.answers === undefined ){
    //   this.router.navigate(['/end-page']);
    // }
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  answerChecker(answer){
    if (this.incorrectAnswerSelected || this.correctAnswerSelected)
      return;

    this.nextButton = true;
    //console.log(this.userAnswer);
    let correctAnswer = this.handleApi.questions[this.indexQuestion].correct_answer;

    this.correctAnswerSelected = correctAnswer;

    if( answer == correctAnswer ){
      ++this.userData.userScore;
    } else {
      this.incorrectAnswerSelected = answer;
      //alert('correct answer is: ' + this.handleApi.questions[this.indexQuestion].correct_answer)
    }
    this.disableRadioButtons()
  }

  goNextQuestion(){
    if(this.indexQuestion === 9){
      this.router.navigate(['/end-page']);
    }
    ++this.indexQuestion;
    this.buildAnswers()
  }

  disableRadioButtons(){
    this.disableButton = true;
  }

}




/*
TODO

  -display right answer if you choose the wrong one
  -solve random bug on init of 1st api call
  -input all over the button

*/
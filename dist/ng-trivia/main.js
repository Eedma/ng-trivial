(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash-page/splash-page.component */ "./src/app/splash-page/splash-page.component.ts");
/* harmony import */ var _quiz_page_quiz_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quiz-page/quiz-page.component */ "./src/app/quiz-page/quiz-page.component.ts");
/* harmony import */ var _end_page_end_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./end-page/end-page.component */ "./src/app/end-page/end-page.component.ts");






var routes = [
    {
        path: '',
        component: _splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_3__["SplashPageComponent"]
    },
    {
        path: 'quiz-page',
        component: _quiz_page_quiz_page_component__WEBPACK_IMPORTED_MODULE_4__["QuizPageComponent"]
    },
    {
        path: 'end-page',
        component: _end_page_end_page_component__WEBPACK_IMPORTED_MODULE_5__["EndPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-trivia';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splash-page/splash-page.component */ "./src/app/splash-page/splash-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _quiz_page_quiz_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quiz-page/quiz-page.component */ "./src/app/quiz-page/quiz-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _end_page_end_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./end-page/end-page.component */ "./src/app/end-page/end-page.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _splash_page_splash_page_component__WEBPACK_IMPORTED_MODULE_5__["SplashPageComponent"],
                _quiz_page_quiz_page_component__WEBPACK_IMPORTED_MODULE_7__["QuizPageComponent"],
                _end_page_end_page_component__WEBPACK_IMPORTED_MODULE_9__["EndPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/end-page/end-page.component.html":
/*!**************************************************!*\
  !*** ./src/app/end-page/end-page.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Well done {{this.userData.userName}}</h1>\n    <p class=\"lead\">You've answered correctly to {{this.userData.userScore}} on 10</p>\n  </div>\n</div>\n\n\n<div class=\"container\">\n  <button type=\"button\" class=\"btn btn-outline-warning btn-lg btn-block\" (click)=\"restart()\">play again</button>\n</div>"

/***/ }),

/***/ "./src/app/end-page/end-page.component.scss":
/*!**************************************************!*\
  !*** ./src/app/end-page/end-page.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZC1wYWdlL2VuZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/end-page/end-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/end-page/end-page.component.ts ***!
  \************************************************/
/*! exports provided: EndPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndPageComponent", function() { return EndPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-data.service */ "./src/app/user-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EndPageComponent = /** @class */ (function () {
    function EndPageComponent(userData, router) {
        this.userData = userData;
        this.router = router;
    }
    EndPageComponent.prototype.ngOnInit = function () {
    };
    EndPageComponent.prototype.restart = function () {
        this.router.navigate(['']);
    };
    EndPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-end-page',
            template: __webpack_require__(/*! ./end-page.component.html */ "./src/app/end-page/end-page.component.html"),
            styles: [__webpack_require__(/*! ./end-page.component.scss */ "./src/app/end-page/end-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_data_service__WEBPACK_IMPORTED_MODULE_2__["UserDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EndPageComponent);
    return EndPageComponent;
}());



/***/ }),

/***/ "./src/app/handle-api.service.ts":
/*!***************************************!*\
  !*** ./src/app/handle-api.service.ts ***!
  \***************************************/
/*! exports provided: HandleApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleApiService", function() { return HandleApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HandleApiService = /** @class */ (function () {
    function HandleApiService(http) {
        this.http = http;
        this.categoryUrl = 'https://opentdb.com/api_category.php';
        this.questionsUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';
    }
    HandleApiService.prototype.getQuestionsUrl = function (category, difficulty) {
        return this.questionsUrl + "&category=" + category + "&difficulty=" + difficulty;
    };
    HandleApiService.prototype.getCategories = function () {
        return this.http.get(this.categoryUrl);
    };
    HandleApiService.prototype.getQuestions = function (category, difficulty) {
        return this.http.get(this.getQuestionsUrl(category, difficulty));
    };
    HandleApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HandleApiService);
    return HandleApiService;
}());



/***/ }),

/***/ "./src/app/quiz-page/quiz-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/quiz-page/quiz-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--head-->\n<div class=\"jumbotron jumbotron-fluid bg-warning\">\n  <div class=\"container\">\n    <h1 class=\"display-4\" routerLink=\"\">It's Trivial!</h1>\n    <p class=\"lead\">do your best, {{this.userData.userName}}</p>\n  </div>\n</div>\n\n<div class=\"container\" *ngIf=\"this.handleApi.questions\">\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <h5 [innerHTML]=\"this.handleApi.questions[this.indexQuestion].question\"></h5>\n    </div>\n  </div>\n\n  <!---inputs-->\n  <div class=\"alert\" *ngFor=\"let answer of answers\" (click)=\"answerChecker(answer)\" [class.bg-success]=\"answer == correctAnswerSelected\" [class.bg-danger]=\"answer == incorrectAnswerSelected\" >\n    <div class=\"custom-control custom-radio\">\n      <input type=\"radio\" id=\"{{answer}}\" name=\"customRadio\" class=\"custom-control-input\" value=\"{{answer}}\"  [disabled]=\"disableButton\">\n      <label class=\"custom-control-label\" for=\"{{answer}}\" [innerHTML]=\"answer\"></label>\n    </div>\n  </div>\n  \n  <!--pagination-->\n  <div class=\"row\">\n    <div class=\"col\">\n      <nav class=\"d-flex justify-content-center mx-auto\" *ngIf=\"nextButton\" >\n          <ul class=\"pagination justify-content-center\">\n            <li class=\"page-item\">\n              <a class=\"page-link\" (click)=\"goNextQuestion()\">Next</a>\n            </li>\n          </ul>\n      </nav>\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/quiz-page/quiz-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/quiz-page/quiz-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alert {\n  border: 1px solid #e9ecef; }\n\n.alert:hover {\n  border: 1px solid black; }\n\n.custom-control-input:disabled ~ .custom-control-label {\n  color: black !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZG9hcmRvL0Rlc2t0b3AvZGV2L25nLXRyaXZpYWwvc3JjL2FwcC9xdWl6LXBhZ2UvcXVpei1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9xdWl6LXBhZ2UvcXVpei1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0e1xuICAgIGJvcmRlcjoxcHggc29saWQgI2U5ZWNlZjtcbn1cblxuLmFsZXJ0OmhvdmVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6ZGlzYWJsZWR+LmN1c3RvbS1jb250cm9sLWxhYmVse1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/quiz-page/quiz-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/quiz-page/quiz-page.component.ts ***!
  \**************************************************/
/*! exports provided: QuizPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPageComponent", function() { return QuizPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _handle_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handle-api.service */ "./src/app/handle-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-data.service */ "./src/app/user-data.service.ts");





var QuizPageComponent = /** @class */ (function () {
    function QuizPageComponent(handleApi, userData, router) {
        this.handleApi = handleApi;
        this.userData = userData;
        this.router = router;
        this.indexQuestion = 0;
        this.answers = [];
        this.nextButton = false;
        this.disableButton = false;
    }
    QuizPageComponent.prototype.ngOnInit = function () {
        this.userData.userScore = 0;
        this.buildAnswers();
        //console.log(this.answers)
        console.log(this.handleApi.questions);
    };
    QuizPageComponent.prototype.buildAnswers = function () {
        this.nextButton = false;
        this.disableButton = false;
        this.correctAnswerSelected = '';
        this.incorrectAnswerSelected = '';
        if (!this.handleApi.questions) {
            return this.router.navigate(['/']);
        }
        var question = this.handleApi.questions[this.indexQuestion];
        this.answers = [question.correct_answer].concat(question.incorrect_answers);
        this.shuffle(this.answers);
        // if ( question === undefined || this.answers === undefined ){
        //   this.router.navigate(['/end-page']);
        // }
    };
    QuizPageComponent.prototype.shuffle = function (array) {
        array.sort(function () { return Math.random() - 0.5; });
    };
    QuizPageComponent.prototype.answerChecker = function (answer) {
        if (this.incorrectAnswerSelected || this.correctAnswerSelected)
            return;
        this.nextButton = true;
        //console.log(this.userAnswer);
        var correctAnswer = this.handleApi.questions[this.indexQuestion].correct_answer;
        this.correctAnswerSelected = correctAnswer;
        if (answer == correctAnswer) {
            ++this.userData.userScore;
        }
        else {
            this.incorrectAnswerSelected = answer;
            //alert('correct answer is: ' + this.handleApi.questions[this.indexQuestion].correct_answer)
        }
        this.disableRadioButtons();
    };
    QuizPageComponent.prototype.goNextQuestion = function () {
        if (this.indexQuestion === 9) {
            this.router.navigate(['/end-page']);
        }
        ++this.indexQuestion;
        this.buildAnswers();
    };
    QuizPageComponent.prototype.disableRadioButtons = function () {
        this.disableButton = true;
    };
    QuizPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-page',
            template: __webpack_require__(/*! ./quiz-page.component.html */ "./src/app/quiz-page/quiz-page.component.html"),
            styles: [__webpack_require__(/*! ./quiz-page.component.scss */ "./src/app/quiz-page/quiz-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_handle_api_service__WEBPACK_IMPORTED_MODULE_2__["HandleApiService"], _user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuizPageComponent);
    return QuizPageComponent;
}());

/*
TODO

  -display right answer if you choose the wrong one
  -solve random bug on init of 1st api call
  -input all over the button

*/ 


/***/ }),

/***/ "./src/app/splash-page/splash-page.component.html":
/*!********************************************************!*\
  !*** ./src/app/splash-page/splash-page.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\" [class.bg-warning]=\"this.userData.userName && this._category && this._difficulty\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Let's play Trivial</h1>\n    <p class=\"lead\">I have few questions for you, let's start right now!</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <form>\n    <div class=\"row\">\n\n      <div class=\"col\">\n        <label for=\"username\">Insert your name</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"this.userData.userName\" name=\"username\">\n      </div>\n      \n      <div class=\"col\">\n          <label class=\"my-1 mr-2\" for=\"category\">Select a category</label>\n          <select class=\"custom-select my-1 mr-sm-2\" id=\"category\" [(ngModel)]=\"_category\" name=\"category\">\n            <option selected>Choose...</option>\n            <option *ngFor=\"let data of categoryData\" value=\"{{data.id}}\">{{data.name}}</option>\n          </select>\n      </div>\n\n      <div class=\"col\">\n          <label class=\"my-1 mr-2\" for=\"difficulty\">Select difficulty</label>\n          <select class=\"custom-select my-1 mr-sm-2\" id=\"difficulty\" [(ngModel)]=\"_difficulty\" name=\"difficulty\">\n            <option selected>Choose...</option>\n            <option value=\"easy\">Easy</option>\n            <option value=\"medium\">Medium</option>\n            <option value=\"hard\">Hard</option>\n          </select>\n      </div>\n    </div>\n\n    <button type=\"button\" class=\"btn btn-lg btn-block\" [class.btn-warning]=\"this.userData.userName && this._category && this._difficulty\" (click)=\"saveQuestionsData()\">I'm ready!</button>\n  </form>\n  \n  \n</div>\n"

/***/ }),

/***/ "./src/app/splash-page/splash-page.component.scss":
/*!********************************************************!*\
  !*** ./src/app/splash-page/splash-page.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col {\n  margin: auto; }\n\nbutton {\n  margin-top: 20vh; }\n\nform {\n  margin-top: 10vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZG9hcmRvL0Rlc2t0b3AvZGV2L25nLXRyaXZpYWwvc3JjL2FwcC9zcGxhc2gtcGFnZS9zcGxhc2gtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NwbGFzaC1wYWdlL3NwbGFzaC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbCB7XG4gICAgbWFyZ2luIDogYXV0bztcbn1cblxuYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDIwdmg7XG59XG5cbmZvcm17XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/splash-page/splash-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/splash-page/splash-page.component.ts ***!
  \******************************************************/
/*! exports provided: SplashPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageComponent", function() { return SplashPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _handle_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handle-api.service */ "./src/app/handle-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-data.service */ "./src/app/user-data.service.ts");





var SplashPageComponent = /** @class */ (function () {
    function SplashPageComponent(handleApi, userData, router) {
        this.handleApi = handleApi;
        this.userData = userData;
        this.router = router;
    }
    SplashPageComponent.prototype.ngOnInit = function () {
        this.showCategories();
    };
    SplashPageComponent.prototype.showCategories = function () {
        var _this = this;
        this.handleApi.getCategories().subscribe(function (response) {
            _this.categoryData = response.trivia_categories;
            console.log(_this.categoryData);
        });
    };
    SplashPageComponent.prototype.saveQuestionsData = function () {
        var _this = this;
        if (!this.userData.userName || !this._category || !this._difficulty) {
            return alert('Please, fill every field');
        }
        this.handleApi.getQuestions(this._category, this._difficulty).subscribe(function (response) {
            _this.handleApi.questions = response.results;
            if (_this.handleApi.questions.length == 0) {
                return _this.saveQuestionsData();
            }
            _this.router.navigate(['/quiz-page']);
        });
    };
    SplashPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-splash-page',
            template: __webpack_require__(/*! ./splash-page.component.html */ "./src/app/splash-page/splash-page.component.html"),
            styles: [__webpack_require__(/*! ./splash-page.component.scss */ "./src/app/splash-page/splash-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_handle_api_service__WEBPACK_IMPORTED_MODULE_2__["HandleApiService"], _user_data_service__WEBPACK_IMPORTED_MODULE_4__["UserDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SplashPageComponent);
    return SplashPageComponent;
}());



/***/ }),

/***/ "./src/app/user-data.service.ts":
/*!**************************************!*\
  !*** ./src/app/user-data.service.ts ***!
  \**************************************/
/*! exports provided: UserDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataService", function() { return UserDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserDataService = /** @class */ (function () {
    function UserDataService() {
        this.userScore = 0;
    }
    UserDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserDataService);
    return UserDataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/edoardo/Desktop/dev/ng-trivial/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
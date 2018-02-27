webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"/dashboard\"><button class=\"btn btn-primary\">Home</button></a> | <a href=\"/question/{{index}}\"><button class=\"btn btn-primary\">Go back to question</button></a>\n<a href=\"/\"><button class=\"btn btn-primary\">Logout</button></a>\n\n<h1>{{Question.question}}</h1>\n<h4>{{Question.description}}</h4>\n\n<form (submit)=\"submitAnswer()\">\n\t<div class=\"form-group row\">\n\t  <label for=\"name\" class=\"col-2 col-form-label\">Answer:</label>\n\t  <div class=\"col-10\">\n\t    <textarea\n\t\t\tname=\"answer\"\n\t\t\trequired \n\t\t\tminlength=\"5\" \n\t\t\tmaxlength=\"24\"\n\t\t\t[(ngModel)]=\"Answer.answer\"\n\t\t\t#answer=\"ngModel\"\n\t\t></textarea> \n\t\t<div *ngIf=\"answer.errors\">\n\t\t\t<p *ngIf=\"answer.errors.required\" style=\"font-size:12px; color: red\">Please enter an answer</p>\n\t\t\t<p *ngIf=\"answer.errors.minlength\" style=\"font-size:12px; color: red\">answer must be at least 5 characters long</p>\n\t\t</div>\n\t\t<p *ngIf=\"!answer.errors\" style=\"font-size:12px; color: blue\">Good answer</p>\n\t  </div>\n\t</div>\n\t<div class=\"form-group row\">\n\t  <label for=\"name\" class=\"col-2 col-form-label\">Supporting Details (optional):</label>\n\t  <div class=\"col-10\">\n\t    <textarea  \n\t\t\tname=\"details\"\n\t\t\tmaxlength=\"24\"\n\t\t\t[(ngModel)]=\"Answer.details\"\n\t\t\t#details=\"ngModel\"\n\t\t></textarea>\n\t\t<!-- <div *ngIf=\"description.errors\">\n\t\t\t<p *ngIf=\"description.errors.required\" style=\"font-size:12px; color: red\">Please enter a description</p>\n\t\t\t<p *ngIf=\"description.errors.minlength\" style=\"font-size:12px; color: red\">Description must be at least 2 characters long</p>\n\t\t</div>\n\t\t<p *ngIf=\"!description.errors\" style=\"font-size:12px; color: blue\">Good description</p> -->\n\t  </div>\n\t</div>\n\t<button *ngIf=\"answer.errors\" disabled type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\t<button *ngIf=\"!answer.errors\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n<br>\n<a href=\"/question/{{index}}\"><button class=\"btn btn-primary\">Cancel</button></a>\n"

/***/ }),

/***/ "../../../../../src/app/answer/answer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var question_service_1 = __webpack_require__("../../../../../src/app/question.service.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/login.service.ts");
var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(route, _questionService, _router, _loginService) {
        this.route = route;
        this._questionService = _questionService;
        this._router = _router;
        this._loginService = _loginService;
    }
    AnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Question = {};
        this.Answer = {};
        this._loginService.getUser().subscribe(function (data) {
            console.log("Got user:", data);
            _this.User = data;
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.index = params['index'];
            _this._questionService.getQuestions().subscribe(function (data) {
                console.log("Got Questions:", data);
                _this.Question = data[_this.index];
                console.log(_this.Question);
            });
        });
    };
    AnswerComponent.prototype.submitAnswer = function () {
        var _this = this;
        this.Answer.user = this.User;
        this.Data = { question: this.Question, answer: this.Answer };
        this._questionService.addAnswer(this.Data).subscribe(function (data) {
            console.log("Submitted answer:", data);
            _this._router.navigate(['/dashboard']);
        });
    };
    AnswerComponent = __decorate([
        core_1.Component({
            selector: 'app-answer',
            template: __webpack_require__("../../../../../src/app/answer/answer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, question_service_1.QuestionService, router_1.Router, login_service_1.LoginService])
    ], AnswerComponent);
    return AnswerComponent;
}());
exports.AnswerComponent = AnswerComponent;


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var new_question_component_1 = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
var question_component_1 = __webpack_require__("../../../../../src/app/question/question.component.ts");
var answer_component_1 = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
var routes = [
    { path: '', pathMatch: 'full', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'new_question', component: new_question_component_1.NewQuestionComponent },
    { path: 'question/:index', component: question_component_1.QuestionComponent },
    { path: 'answer/:index', component: answer_component_1.AnswerComponent },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n\tpadding: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var login_service_1 = __webpack_require__("../../../../../src/app/login.service.ts");
var question_service_1 = __webpack_require__("../../../../../src/app/question.service.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var new_question_component_1 = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
var question_component_1 = __webpack_require__("../../../../../src/app/question/question.component.ts");
var answer_component_1 = __webpack_require__("../../../../../src/app/answer/answer.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                new_question_component_1.NewQuestionComponent,
                question_component_1.QuestionComponent,
                answer_component_1.AnswerComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [login_service_1.LoginService, question_service_1.QuestionService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"/\"><button class=\"btn btn-primary\">Logout</button></a>\n<a href=\"/new_question\"><button class=\"btn btn-primary\">Add a question</button></a>\n\n<h1>Hi {{User}}!</h1>\n\n<form (submit)=\"onSubmitSearch()\">\n\t<!-- <p>Search: <input type=\"text\" name=\"search\" [(ngModel)]=\"search\"></p> -->\n\t<div class=\"input-group col-md-8\">\n\t      <input class=\"form-control rounded-0 py-2\" type=\"search\" name=\"search\" placeholder=\"Search all questions\" id=\"search\" [(ngModel)]=\"search\">\n\t      <span class=\"input-group-btn\">\n\t        <button class=\"btn btn-outline-secondary\" type=\"submit\">\n\t            <i class=\"fa fa-search\">Search</i>\n\t        </button>\n\t      </span>\n\t</div>\n<br>\t\n</form>\n\n<br>\n\n<p *ngIf=\"Questions.length == 0\">No questions here!</p>\n\n<table *ngIf=\"Questions.length > 0\">\n\t<tr>\n\t\t<th>Question</th>\n\t\t<th>Answers</th>\n\t\t<th>Action</th>\n\t</tr>\n\t<tr *ngFor=\"let x of Questions\">\n\t\t<td>{{x.question}}</td>\n\t\t<td>{{x.answers.length}}</td>\n\t\t<td><a href=\"/question/{{Questions.indexOf(x)}}\"><button class=\"btn btn-primary\">Show</button></a> | <a href=\"/answer/{{Questions.indexOf(x)}}\"><button class=\"btn btn-primary\">Answer</button></a></td>\n\t</tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_service_1 = __webpack_require__("../../../../../src/app/login.service.ts");
var question_service_1 = __webpack_require__("../../../../../src/app/question.service.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_loginService, _questionService, _router) {
        this._loginService = _loginService;
        this._questionService = _questionService;
        this._router = _router;
        this.newQuestions = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Questions = [];
        this.User = { name: "" };
        this._loginService.getUser().subscribe(function (data) {
            console.log("Got user:", data);
            if (data == null) {
                _this._router.navigate(['/']);
            }
            else {
                _this.User = data;
            }
        });
        this._questionService.getQuestions().subscribe(function (data) {
            console.log("Got questions:", data);
            _this.Questions = data;
        });
    };
    DashboardComponent.prototype.onSubmitSearch = function () {
        var _this = this;
        if (this.search == "") {
            this._questionService.getQuestions().subscribe(function (data) {
                console.log("Got questions:", data);
                _this.Questions = data;
            });
        }
        else {
            this._questionService.getQuestions().subscribe(function (data) {
                console.log("Got questions:", data);
                _this.newQuestions = [];
                _this.Questions = data;
                for (var _i = 0, _a = _this.Questions; _i < _a.length; _i++) {
                    var x = _a[_i];
                    if (x.question.includes(_this.search)) {
                        _this.newQuestions.push(x);
                    }
                }
                _this.Questions = _this.newQuestions;
            });
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, question_service_1.QuestionService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    LoginService.prototype.login = function (User) {
        return this._http.post("user/login", User);
    };
    LoginService.prototype.logout = function () {
        return this._http.get("user/logout");
    };
    LoginService.prototype.getUser = function () {
        return this._http.get("user/get");
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".disbaled {\n\t\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n\n<h1>Q&A</h1>\n\n<form (submit)=\"onSubmit()\">\n\t<div class=\"form-group row\">\n\t  <label for=\"name\" class=\"col-2 col-form-label\">Username:</label>\n\t  <div class=\"col-10\">\n\t    <input \n\t\t\ttype=\"text\" \n\t\t\tname=\"name\"\n\t\t\trequired \n\t\t\tminlength=\"2\" \n\t\t\tmaxlength=\"24\"\n\t\t\t[(ngModel)]=\"User.name\"\n\t\t\t#name=\"ngModel\"\n\t\t>\n\t\t<div *ngIf=\"name.errors\">\n\t\t\t<p *ngIf=\"name.errors.required\" style=\"font-size:12px; color: red\">Please enter a name</p>\n\t\t\t<p *ngIf=\"name.errors.minlength\" style=\"font-size:12px; color: red\">user name must be at least 2 characters long</p>\n\t\t</div>\n\t\t<p *ngIf=\"!name.errors\" style=\"font-size:12px; color: blue\">Good first name</p>\n\t  </div>\n\t</div>\n\t<button *ngIf=\"name.errors\" disabled type=\"submit\" class=\"btn btn-primary\">Enter</button>\n\t<button *ngIf=\"!name.errors\" type=\"submit\" class=\"btn btn-primary\">Enter</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_service_1 = __webpack_require__("../../../../../src/app/login.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this._loginService.logout().subscribe(function (data) {
            console.log("User logged out!", data);
        });
        this.User = { name: "" };
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.User.name.length < 2) {
            this.error = "Username must be at least 2 characters!";
        }
        else {
            this._loginService.login(this.User).subscribe(function (data) {
                console.log("Got user:", data);
                _this._router.navigate(['/dashboard']);
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"/dashbord\"><button class=\"btn btn-primary\">Home</button></a>\n<a href=\"/\"><button class=\"btn btn-primary\">Logout</button></a>\n\n<h1>New Question</h1>\n\n<form (submit)=\"submitQuestion()\">\n\t<div class=\"form-group row\">\n\t  <label for=\"name\" class=\"col-2 col-form-label\">Question:</label>\n\t  <div class=\"col-10\">\n\t    <textarea \n\t\t\tname=\"question\"\n\t\t\trequired \n\t\t\tminlength=\"10\" \n\t\t\tmaxlength=\"128\"\n\t\t\t[(ngModel)]=\"Question.question\"\n\t\t\t#question=\"ngModel\"\n\t\t></textarea>\n\t\t<div *ngIf=\"question.errors\">\n\t\t\t<p *ngIf=\"question.errors.required\" style=\"font-size:12px; color: red\">Please enter a question</p>\n\t\t\t<p *ngIf=\"question.errors.minlength\" style=\"font-size:12px; color: red\">Question must be at least 10 characters long</p>\n\t\t</div>\n\t\t<p *ngIf=\"!question.errors\" style=\"font-size:12px; color: blue\">Good question</p>\n\t  </div>\n\t</div>\n\t<div class=\"form-group row\">\n\t  <label for=\"name\" class=\"col-2 col-form-label\">Description (optional):</label>\n\t  <div class=\"col-10\">\n\t    <textarea\n\t\t\tname=\"description\"\n\t\t\tminlength=\"2\" \n\t\t\tmaxlength=\"128\"\n\t\t\t[(ngModel)]=\"Question.description\"\n\t\t\t#description=\"ngModel\"\n\t\t></textarea> \n\t\t<!-- <div *ngIf=\"description.errors\">\n\t\t\t<p *ngIf=\"description.errors.required\" style=\"font-size:12px; color: red\">Please enter a description</p>\n\t\t\t<p *ngIf=\"description.errors.minlength\" style=\"font-size:12px; color: red\">Description must be at least 2 characters long</p>\n\t\t</div>\n\t\t<p *ngIf=\"!description.errors\" style=\"font-size:12px; color: blue\">Good description</p> -->\n\t  </div>\n\t</div>\n\t<button *ngIf=\"question.errors\" disabled type=\"submit\" class=\"btn btn-primary\">Submit</button>\n\t<button *ngIf=\"!question.errors\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n<br>\n<a href=\"/dashboard\"><button class=\"btn btn-primary\">Cancel</button></a>\n"

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_service_1 = __webpack_require__("../../../../../src/app/login.service.ts");
var question_service_1 = __webpack_require__("../../../../../src/app/question.service.ts");
var NewQuestionComponent = /** @class */ (function () {
    function NewQuestionComponent(_questionService, _loginService, _router) {
        this._questionService = _questionService;
        this._loginService = _loginService;
        this._router = _router;
    }
    NewQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loginService.getUser().subscribe(function (data) {
            console.log("Got user:", data);
            _this.User = data;
        });
        this.Question = { question: "", description: "" };
    };
    NewQuestionComponent.prototype.submitQuestion = function () {
        var _this = this;
        console.log(this.Question);
        this._questionService.submit(this.Question).subscribe(function (data) {
            console.log("Question submitted:", data);
            _this._router.navigate(['/dashboard']);
        });
    };
    NewQuestionComponent.prototype.cancel = function () {
    };
    NewQuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-new-question',
            template: __webpack_require__("../../../../../src/app/new-question/new-question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-question/new-question.component.css")]
        }),
        __metadata("design:paramtypes", [question_service_1.QuestionService, login_service_1.LoginService, router_1.Router])
    ], NewQuestionComponent);
    return NewQuestionComponent;
}());
exports.NewQuestionComponent = NewQuestionComponent;


/***/ }),

/***/ "../../../../../src/app/question.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var QuestionService = /** @class */ (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.submit = function (question) {
        return this._http.post('question/create', question);
    };
    QuestionService.prototype.getQuestions = function () {
        return this._http.get('question/all');
    };
    QuestionService.prototype.addAnswer = function (data) {
        return this._http.post('answer/create', data);
    };
    QuestionService.prototype.likeAnswer = function (id) {
        return this._http.get('answer/like/' + id);
    };
    QuestionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;


/***/ }),

/***/ "../../../../../src/app/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"/dashboard\"><button class=\"btn btn-primary\">Home</button></a> | <a href=\"/answer/{{index}}\"><button class=\"btn btn-primary\">Answer this question</button></a>\n<a href=\"/\"><button class=\"btn btn-primary\">Logout</button></a>\n\n<h1>{{Question.question}}</h1>\n<h4>{{Question.description}}</h4>\n\n<br>\n\n<div *ngIf=\"Question.answers.length > 0\">\n\t<ul *ngFor=\"let x of Question.answers\" class=\"list-unstyled\">\n\t\t<li>\n\t\t\t<p>{{x.user}}</p>\n\t\t\t<p><strong>{{x.answer}}</strong></p>\n\t\t\t<p>{{x.details}}</p>\n\t\t\t<p>Likes: {{x.likes}} | <button (click)=\"like(x._id)\">Like!</button></p>\n\t\t</li>\n\t</ul>\n</div>\n\n<p *ngIf=\"Question.answers.length == 0\">No Answers!</p>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/question/question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var question_service_1 = __webpack_require__("../../../../../src/app/question.service.ts");
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(route, _questionService) {
        this.route = route;
        this._questionService = _questionService;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Question = { answers: [] };
        this.sub = this.route.params.subscribe(function (params) {
            _this.index = params['index'];
            _this._questionService.getQuestions().subscribe(function (data) {
                console.log("Got Questions:", data);
                _this.Question = data[_this.index];
                console.log(_this.Question.answers);
                // SORT ANSWERS
                _this.Question.answers.sort(function Compare(a, b) {
                    return b.likes - a.likes;
                });
            });
        });
    };
    QuestionComponent.prototype.like = function (id) {
        var _this = this;
        console.log(id);
        this._questionService.likeAnswer(id).subscribe(function (data) {
            console.log("Liked!", data);
            _this._questionService.getQuestions().subscribe(function (data) {
                console.log("Got Questions:", data);
                _this.Question = data[_this.index];
                console.log(_this.Question);
                // SORT ANSWERS
                _this.Question.answers.sort(function Compare(a, b) {
                    return b.likes - a.likes;
                });
            });
        });
    };
    QuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-question',
            template: __webpack_require__("../../../../../src/app/question/question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, question_service_1.QuestionService])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
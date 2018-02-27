import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

	private sub: any;

	private index: any;

	private Question: any;

	private Data: any;

	private Answer: any;

	private User: any;

	constructor(private route: ActivatedRoute, private _questionService: QuestionService, private _router: Router, private _loginService: LoginService) { }

	ngOnInit() {
		this.Question = {};
		this.Answer = {};
		this._loginService.getUser().subscribe(data=>{
			console.log("Got user:", data);	
			this.User = data;
		});
		this.sub = this.route.params.subscribe(params => {
		this.index = params['index'];
		this._questionService.getQuestions().subscribe(data=>{	
			console.log("Got Questions:", data)
			this.Question = data[this.index];
			console.log(this.Question);
			});
		});
	}

	submitAnswer(){
		this.Answer.user = this.User;
		this.Data = {question: this.Question, answer: this.Answer}
		this._questionService.addAnswer(this.Data).subscribe(data=>{
			console.log("Submitted answer:", data);
			this._router.navigate(['/dashboard']);
		})
	}

}

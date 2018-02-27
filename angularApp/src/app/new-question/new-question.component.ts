import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

	private Question: any;

	private User: any;

	constructor(private _questionService: QuestionService, private _loginService: LoginService, private _router: Router) { }

	ngOnInit() {
		this._loginService.getUser().subscribe(data=>{
			console.log("Got user:", data);	
			this.User = data;
		});
		this.Question = {question: "", description: ""}
	}

	submitQuestion(){
		console.log(this.Question);
		this._questionService.submit(this.Question).subscribe(data=>{
			console.log("Question submitted:", data);
			this._router.navigate(['/dashboard']);
		})
	}

	cancel(){

	}

}

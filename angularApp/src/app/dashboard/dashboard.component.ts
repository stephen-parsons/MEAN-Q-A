import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';
import { QuestionService } from '../question.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	private newQuestions = [];

	private User: any;

	private Questions: any;

	private search: any;

	constructor(private _loginService: LoginService, private _questionService: QuestionService,private _router: Router) {}

	ngOnInit() {
		this.Questions = [];
		this.User = {name: ""}
		this._loginService.getUser().subscribe(data=>{
			console.log("Got user:", data);
			if (data == null){
				this._router.navigate(['/']);
			}	
			else {
				this.User = data;
			}
		});
		this._questionService.getQuestions().subscribe(data=>{
			console.log("Got questions:", data);	
			this.Questions = data;
		})
	}

	onSubmitSearch(){
		if (this.search == ""){
			this._questionService.getQuestions().subscribe(data=>{
				console.log("Got questions:", data);	
				this.Questions = data;
				})
			}
		else {
			this._questionService.getQuestions().subscribe(data=>{
				console.log("Got questions:", data);	
				this.newQuestions = [];
				this.Questions = data;
				for (let x of this.Questions){
					if (x.question.includes(this.search)){
						this.newQuestions.push(x);
					}	
				}
				this.Questions = this.newQuestions;
			})
		}
	}
}

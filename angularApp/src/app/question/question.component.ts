import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

	private sub: any;

	private index: any;

	private Question: any;

	constructor(private route: ActivatedRoute, private _questionService: QuestionService) { }

	ngOnInit() {
		this.Question = {answers: []};
		this.sub = this.route.params.subscribe(params => {
		this.index = params['index'];
		this._questionService.getQuestions().subscribe(data=>{	
			console.log("Got Questions:", data)
			this.Question = data[this.index];
			console.log(this.Question.answers);

			// SORT ANSWERS
			this.Question.answers.sort(function Compare(a,b){
				return b.likes-a.likes;
				});

			});
		});
	}

	like(id){
		console.log(id)
		this._questionService.likeAnswer(id).subscribe(data=>{
			console.log("Liked!", data);
			this._questionService.getQuestions().subscribe(data=>{	
				console.log("Got Questions:", data)
				this.Question = data[this.index];
				console.log(this.Question);
				// SORT ANSWERS
				this.Question.answers.sort(function Compare(a,b){
					return b.likes-a.likes;
					});
				});
		})
	}
}	


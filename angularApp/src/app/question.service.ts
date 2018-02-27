import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {

  constructor(private _http: HttpClient) {}

  submit(question){
  	return this._http.post('question/create', question);
  }

  getQuestions(){
  	return this._http.get('question/all');
  }

  addAnswer(data){
  	return this._http.post('answer/create', data);
  }

  likeAnswer(id){
  	return this._http.get('answer/like/'+id)
  }

}

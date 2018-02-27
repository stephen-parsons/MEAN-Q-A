import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: LoginComponent},
	{ path : 'dashboard', component: DashboardComponent},
	{ path : 'new_question', component: NewQuestionComponent},
	{ path : 'question/:index', component: QuestionComponent},
	{ path : 'answer/:index', component: AnswerComponent},
	{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

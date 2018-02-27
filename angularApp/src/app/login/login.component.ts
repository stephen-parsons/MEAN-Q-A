import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

	private error: any;

	private User: any

	constructor(private _loginService: LoginService, private _router: Router) {
	}

	ngOnInit() {
		this._loginService.logout().subscribe(data=>{
			console.log("User logged out!", data);	
		});
		this.User = {name: ""};
	}

	onSubmit(){
		if (this.User.name.length < 2){
			this.error = "Username must be at least 2 characters!";
		}
		else{
			this._loginService.login(this.User).subscribe(data=>{
				console.log("Got user:", data);	
				this._router.navigate(['/dashboard']);
			});
		}
	}

}

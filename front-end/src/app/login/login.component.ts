import { Component } from '@angular/core';
import { LoginserviceService } from './loginservice.service';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public user : User;
  constructor(private loginService: LoginserviceService) {
      this.user = new User();
  }

  
  validateLogin() {
  	if(true) {
  		this.loginService.valideLogin(this.user).subscribe((obs) => console.log(obs));
  	} else {
  		alert('enter user name and password');
  	}
  }
}

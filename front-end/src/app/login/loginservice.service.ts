import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  public user : User;
  constructor(private http: HttpClient){
    this.user = new User();
	}
	
	valideLogin(user: User){
		return this.http.post('/login',{
			email : user.email,
			password : user.password
		})
	}
}

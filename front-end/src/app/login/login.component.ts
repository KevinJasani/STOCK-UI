import { Component } from '@angular/core';
import { LoginserviceService } from './loginservice.service';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public user : User;
  email : String = ""
  password : String = ""
  count  = 0;
  StudentArray : any[]= [];
  constructor(private http : HttpClient,private router: Router) {
      this.user = new User();
      
  }

  
  validateLogin() {
  	this.http.get("http://localhost:3000/userdata/getAll")
    .subscribe((resultData: any)=>
    {       
        console.log(resultData);
        this.StudentArray = resultData.data;
        
    });
    console.log("semail : "+this.email);
      console.log("pass : "+this.password);

    for (let i = 0; i < this.StudentArray.length; i++) {
      
      if(this.email==this.StudentArray[i].email && this.password==this.StudentArray[i].password){
         console.log("founded ");
         this.router.navigateByUrl('/listing')
         this.count=1;
         break;
      }else{
        this.count=0;
        
      
      }
      // You can perform any desired operation with each element of resultData
  }
  if(this.count==0)
  {
    console.log("not founded !!!!");
    alert("invalid user and password")
  }
 
  }
}

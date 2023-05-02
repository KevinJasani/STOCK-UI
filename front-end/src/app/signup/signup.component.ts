import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  StudentArray : any[] = [];
  currentStudentID = "";
 
  firstName: string ="";
  lastName: string ="";
  email: string ="";
  password: String = ""
  ngOnInit() {
    // ...
  }
  constructor(private http: HttpClient )
  {
    //this.getAllStudent();
  }
  signup()
  {
    console.log("data got it");
    //alert("Student Registered Successfully")
    let bodyData = {
      "firstname" : this.firstName,
      "lastname" : this.lastName,
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:3000/userdata/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        console.log("data got it");
        alert("Student Registered Successfully")
        //this.getAllEmployee();
        this.firstName = '';
        this.lastName = '';
        this.email  = '';
        this.password="";
    });
  }
}

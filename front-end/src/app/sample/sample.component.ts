import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';




@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  name : string = ""
  address : String = ""
  phone : String = ""
  
  ngOnInit() {
    // ...
  }
  constructor(private http: HttpClient )
  {
   // this.getAllStudent();
  }
  // getAllStudent() {
 
  //   this.http.get("http://localhost:8000/user/getAll")
  //   .subscribe((resultData: any)=>
  //   {
      
  //       console.log(resultData);
  //       this.StudentArray = resultData.data;
  //   });
 
 
  //ll }
 
  register()
  {
    console.log("data got it");
    //alert("Student Registered Successfully")
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "phone" : this.phone,
    };
    this.http.post("http://localhost:3000/user/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        console.log("data got it");
        alert("Student Registered Successfully")
         //this.getAllEmployee();
        this.name = '';
        this.address = '';
        this.phone  = '';
        //this.getAllStudent();
    });
  }
}

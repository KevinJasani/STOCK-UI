import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';




@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  StudentArray : any[] = [];
  currentStudentID = "";
 
  name: string ="";
  address: string ="";
  phone: string ="";
  
  ngOnInit() {
    // ...
  }
  constructor(private http: HttpClient )
  {
    this.getAllStudent();
  }
  getAllStudent() {
 
    this.http.get("http://localhost:3000/user/getAll")
    .subscribe((resultData: any)=>
    {
      
        console.log(resultData);
        this.StudentArray = resultData.data;
    });
 
 
  }
 
  setUpdate(data: any)
  {
   this.name = data.name;
   this.address = data.address;
   this.phone = data.phone;
 
   this.currentStudentID = data._id;
  
  }
  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "phone" : this.phone,
 
    };
    
    this.http.patch("http://localhost:3000/user/update"+ "/"+this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Updateddd")
        this.getAllStudent();
      
    });
  }
  
  setDelete(data: any) {
    this.http.delete("http://localhost:3000/user/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deletedddd")
        this.getAllStudent();
  
    });
    }
    
 
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
        this.getAllStudent();
    });
  }
}

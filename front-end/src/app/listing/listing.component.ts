import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ListingComponent {
  @Input() StockName: String = "";
  listingArray : any[] = [];
  qty : String = ""
  value : String = ""
  quantity : String =""
  currentStudentID : String= ""
  data : String=""
  details : String =""
  SN: String=""
  
  
   exampleModal = document.getElementById('exampleModal');
  constructor(private http: HttpClient,config: NgbModalConfig, private modalService: NgbModal )
  {
    
    config.backdrop = 'static';
		config.keyboard = false;
    this.getAllStudent();
  }
  open(data :any)
{
  this.modalService.open(data);
}
  getAllStudent() {
 
    this.http.get("http://localhost:3000/stocklist/getAll")
    .subscribe((resultData: any)=>
    { 
        
        console.log(resultData);
        console.log(this.qty);
        this.listingArray = resultData.data;
        
    });
}
buystock(data:any)
{
  this.StockName=data.stockName;
  this.details=data.details
  this.value=data.value;
  console.log(data);
  this.currentStudentID = data._id;
}
sellStock(data : any)
{
  this.StockName = data.stockName;
   this.details = data.details;
   this.value = data.value;
   //this.quantity=data.quantity;
 
   this.currentStudentID = data._id;
  console.log("data getting");
}
Addtoportfollio ()
{
  console.log("data got it");
    
  //alert("Student Registered Successfully")
  let bodyData = {
    "stockName" : this.StockName,
    "details" : this.details,
    "value" : this.value,
    "quantity" : this.quantity,
    "total" : Number(this.value)* Number(this.quantity)
  };
  console.log(bodyData);
  this.http.post("http://localhost:3000/portfollio/create",bodyData).subscribe((resultData: any)=>
  {
      console.log(resultData);
      console.log(" inside data got it");
      alert("Stock Purchased Successfully")
      //this.getAllEmployee();
      this.StockName = '';
      this.details = '';
      this.value  = '';
      this.quantity="";
      
  });
  
}
// remove stock from portfollio
sellstockfromportfollo()
{
  let bodyData = {
    "stockName" : this.StockName,
    "details" : this.details,
    "value" : this.value,
    "quantity" : this.quantity,
    "total" : Number(this.value)* Number(this.quantity)
  };
  this.http.delete("http://localhost:3000/portfollio/delete"+ "/"+ this.currentStudentID).subscribe((resultData: any)=>
  {
      console.log(resultData);
      alert("Student Deletedddd")
      this.getAllStudent();

  });
}
}


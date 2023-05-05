import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-portfollio',
  templateUrl: './portfollio.component.html',
  styleUrls: ['./portfollio.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class PortfollioComponent {
  portfollioarr : any[] = [];
  StockName : String = ""
  qty : String = ""
  value : String = ""
  quantity : String =""
  currentStudentID : String= ""
  data : String=""
  details : String =""
  exampleModal = document.getElementById('exampleModal');
  constructor(private http: HttpClient,config: NgbModalConfig, private modalService: NgbModal )
  {
    
    config.backdrop = 'static';
		config.keyboard = false;
    this.getportfolliolist();
  }
  open(data :any)
  {
  this.modalService.open(data);
  
  }
  getportfolliolist() {
 
    this.http.get("http://localhost:3000/portfollio/getAll")
    .subscribe((resultData: any)=>
    { 
        
        console.log(resultData);
        //console.log(this.qty);
        this.portfollioarr = resultData.data;
        
    });
}
sellStock(data : any)
{
  this.StockName = data.stockName;
  this.details = data.details;
  this.value = data.value;
  //this.quantity=data.quantity;

  this.currentStudentID = data._id;
 console.log("data getting");
  this.modalService.open(data);
}
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
      this.getportfolliolist();

  });
}
}


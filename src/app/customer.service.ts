import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
url='http://localhost:8087/api/fef/v1/customer'
  constructor(private http: HttpClient) {}
  getAllCustomer(){
    return this.http.get(this.url);
  }
  saveCustomerData(data: any){
    //console.log(data);
    return this.http.post(this.url, data).subscribe((result)=>{
      console.log(result);
    });

  }
}

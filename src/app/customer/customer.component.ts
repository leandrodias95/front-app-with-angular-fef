import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

constructor(private customer: CustomerService){}
  addCustomer = new FormGroup({
    nome: new FormControl(''),
    ultimoNome: new FormControl(''),
    cpf: new FormControl(''),
    aniversario: new FormControl(''),
    dataNascimento: new FormControl(''),
    rendaMensal: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl('')
  });


  ngOnInit(): void {
    
  }
  SaveData(){
    console.log(this.addCustomer.value)
    this.customer.saveCustomerData(this.addCustomer.value);
  }
  
  
  }



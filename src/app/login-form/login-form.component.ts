import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  constructor(public srvc: LoginserviceService,public rtr: Router){}
ngOnInit(): void {
  
}

  loginform= new FormGroup({
    uname: new FormControl(),
    pwd: new FormControl()
  })

  CheckUser(){
    alert();
    var res= this.srvc.ValidateUser(this.loginform.value["uname"],this.loginform.value["pwd"]);
    if(res){
      this.rtr.navigate(["employee"]);
    }else{
      alert("Invalid User..");
    }
  }


  email : string ="";
  password : string ="";
  show: boolean= false;
  submit(){
  console.log("user name is " + this.email)
  // console.log(this.rtr.navigate(["employee"]));
  this.clear();
  }
  clear(){
  this.email ="";
  this.password = "";
  this.show = true;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }

  ValidateUser(username: any,password: any){
    return true;
  }
}

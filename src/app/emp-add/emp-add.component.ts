import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit{
empForm: FormGroup;
constructor(private _fb: FormBuilder,
  private _empService: EmployeeService,
  private _dialogRef: MatDialogRef<EmpAddComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  this.empForm= this._fb.group({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    action: '',
  })
}

ngOnInit(): void {
  this.empForm.patchValue(this.data);
}

onFormSubmit(){
  if(this.empForm.valid){
    if(this.data){
      this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee detail updated!');
          this._dialogRef.close(true);
        },
      });
    } else{
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          this._dialogRef.close(true);
        },
      });
    }
  }
}
}

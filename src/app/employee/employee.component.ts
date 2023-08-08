import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddComponent } from '../emp-add/emp-add.component';
import { EmployeeService } from '../employee.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{


displayedColumns: string[] = [
  'id',
  'firstName', 
  'lastName', 
  'email', 
  'address',
  'phone',
  'action',   
];
dataSource!: MatTableDataSource<any>;
constructor(private _dialog:MatDialog,private _empServive: EmployeeService) {}

ngOnInit(): void {
  this.getEmployeeList();
}

openAddEditEmpForm(){
 const dialogRef = this._dialog.open(EmpAddComponent);
 dialogRef.afterClosed().subscribe({
  next: (val) => {
    if(val) {
      this.getEmployeeList();
    }
  },
 });
}

getEmployeeList(){
  this._empServive.getEmployeeList().subscribe({
    next: (res) =>{
      this.dataSource=new MatTableDataSource(res);
    },
  });
}

viewEmployee(data: any){
  const dialogRef = this._dialog.open(EmpAddComponent,{
    data,
  });
  // dialogRef.afterClosed().subscribe({
  //   next: (val) => {
  //     if(val){
  //       this.getEmployeeList();
  //     }
  //   },
  // }); 
}

deleteEmployee(id: number){
  this._empServive.deleteEmployee(id).subscribe({
    next: (res) => {
      alert('Employee deleted!');
      this.getEmployeeList();
    },
    error: console.log,
  });
}

openEditForm(data: any){
   const dialogRef = this._dialog.open(EmpAddComponent,{
    data,
   });

   dialogRef.afterClosed().subscribe({
    next: (val) => {
      if(val) {
        this.getEmployeeList();
      }
    },
   });
 }
}
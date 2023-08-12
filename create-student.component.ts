import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  template: `
  <h3>Create Student</h3>
  <div [hidden]="submitted" style="width: 400px;">
    <form (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">First Name</label>
        <input type="text" class="form-control" id="firstName" required [(ngModel)]="student.firstName" name="firstName">
        <label for="lname">Last Name</label>
        <input type="text" class="form-control" id="lastName" required [(ngModel)]="student.lastName" name="lastName">
        <label for="pwd">Password</label>
        <input type="password" class="form-control" id="password" required [(ngModel)]="student.password" name="password">
  
      </div>
  
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
  <div [hidden]="!submitted">
    <h4>You have submitted successfully!!!</h4>
    <!-- <button class="btn btn-success" (click)="newStudent()">Add</button> -->
  </div>
  
  `,
  styles: [
  ]
})
export class CreateStudentComponent {
  student:Student=new Student();
  submitted=false;
  

constructor(private StudentService: StudentService,

private router: Router) { }

onSubmit() {

this.submitted = true;

this.save();
}



save() {

  this.StudentService
  
  .createStudent(this.student).subscribe(data => {
  
  console.log(data)
  
  this.student = new Student();
  
  //this.gotoList();
  
  this.router.navigate(['/students']);
  
  },
  
  error => console.log(error));
  
  }
  
  

}

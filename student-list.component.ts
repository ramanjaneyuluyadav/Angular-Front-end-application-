import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from 'src/Student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  
  constructor(private studentService: StudentService,

    private router: Router) {}
    students: Observable<Student[]>
   ngOnInit() {

    this.reloadData();
    
    }
    
    reloadData() {

      this.students = this.studentService.getStudentsList();
      
      }
      studentDetails(id:number){
        this.router.navigate(['details', id])
      }

}

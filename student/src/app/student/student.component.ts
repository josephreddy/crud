import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private http: Http) { }
  studentobj:object ={};

  addNewStudent = function(student) {
   
    this.studentobj = {
       "sname": student.sname,
       "course": student.course,
       "courseid": student.courseid,
       "place": student.place,
       "project": student.project
    }
    this.http.post("http://localhost:4000/students/", this.studentobj).subscribe((res:Response)=>{
      console.log(res);
    })
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courseName: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courseName = this.route.snapshot.paramMap.get("name");
    console.log(this.courseName);
  }

}

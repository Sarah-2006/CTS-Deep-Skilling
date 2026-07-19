import { Component, OnInit } from '@angular/core';

import { Course } from '../../services/course';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {


  courses: Course[] = [];


  constructor(private courseService: CourseService) {}


  ngOnInit(): void {

    this.courses = this.courseService.getCourses();

  }


  addCourse(){

    this.courseService.addCourse({

      id: 6,
      name: 'Cloud Computing',
      code: 'CC101',
      credits: 3,
      gradeStatus: 'pending'

    });


    this.courses = this.courseService.getCourses();

  }

}
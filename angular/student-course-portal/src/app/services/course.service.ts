// src/app/services/course.service.ts
import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root' // Makes the service a singleton shared application-wide
})
export class CourseService {
  private courses: Course[] = [
    { id: 1, name: 'Introduction to Angular', code: 'ANG-101', credits: 4, gradeStatus: 'pending' },
    { id: 2, name: 'Advanced TypeScript', code: 'TS-202', credits: 3, gradeStatus: 'passed' },
    { id: 3, name: 'Web Development Basics', code: 'WEB-101', credits: 3, gradeStatus: 'passed' },
    { id: 4, name: 'Database Management Systems', code: 'DBMS-301', credits: 4, gradeStatus: 'failed' },
    { id: 5, name: 'Cloud Computing Essentials', code: 'CLOUD-401', credits: 3, gradeStatus: 'pending' }
  ];

  constructor() {}

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}
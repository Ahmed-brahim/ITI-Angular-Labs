import { Component } from '@angular/core';
import { Student } from './student';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from './components/student-form/student-form';
import { StudentTableComponent } from './components/student-table/student-table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    StudentFormComponent,
    StudentTableComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  students: Student[] = [];
  editingStudent: Student | null = null;

  addStudent(student: Student) {
    this.students.push({ ...student, id: Date.now() });
  }

  deleteStudent(id: number) {
    this.students = this.students.filter(s => s.id !== id);
  }

  startEdit(student: Student) {
    this.editingStudent = { ...student };
  }

  updateStudent(updated: Student) {
    this.students = this.students.map(s =>
      s.id === updated.id ? updated : s
    );
    this.editingStudent = null;
  }
}

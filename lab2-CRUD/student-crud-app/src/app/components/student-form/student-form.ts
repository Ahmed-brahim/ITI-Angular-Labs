import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student } from '../../student';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-form.html',
  styleUrls: ['./student-form.css']
})
export class StudentFormComponent implements OnChanges {
  @Input() student: Student | null = null;
  @Output() add = new EventEmitter<Student>();
  @Output() update = new EventEmitter<Student>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: 0,
      name: '',
      age: null,
      grade: ''
    });
  }

  ngOnChanges(): void {
    if (this.student) {
      this.form.patchValue(this.student);
    }
  }

  onSubmit(): void {
    const studentData = this.form.value;

    if (this.student) {
      this.update.emit(studentData);
    } else {
      this.add.emit(studentData);
    }

    this.form.reset();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../student';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-table.html',
  styleUrls: ['./student-table.css']
})
export class StudentTableComponent {
  @Input() students: Student[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Student>();

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onEdit(student: Student) {
    this.edit.emit(student);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIcon,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.css',
})
export class SearchFieldComponent {
  @Output() search = new EventEmitter<string>();

  inputValue = '';

  onSearchChange() {
    this.search.emit(this.inputValue);
  }

  clearSearch() {
    this.inputValue = '';
    this.search.emit('');
  }
}

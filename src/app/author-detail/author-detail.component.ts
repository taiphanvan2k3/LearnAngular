import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../authors';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent {
  @Input() author!: Author;
  @Output() selectAuthor = new EventEmitter<Author>();
  @Output() deleteAuthor = new EventEmitter<number>();
}

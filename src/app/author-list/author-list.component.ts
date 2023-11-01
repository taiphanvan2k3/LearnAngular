import { Component, Input } from '@angular/core';
import { Author, authors } from '../authors';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor: Author = authors[0];

  onSelectAuthor(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }

  onDeleteAuthor(authorId: number) {
    this.authors = this.authors.filter((author) => author.id !== authorId);
    if (this.currentAuthor.id === authorId) {
      this.currentAuthor = this.authors[0];
    }
  }
}

import { Component, Input, Version } from '@angular/core';

@Component({
  selector: 'example-lesson4',
  templateUrl: './example-lesson4.component.html',
  styleUrls: ['./example-lesson4.component.css']
})
export class ExampleLesson4Component {
  @Input() name!: string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent {
  @Input() users!: any[];
  @Input() tags!: string[];
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-component',
  templateUrl: './box-component.component.html',
  styleUrls: ['./box-component.component.css']
})
export class BoxComponentComponent {
  @Input() isDanger!: boolean;
  @Input() isWarning!: boolean;
}

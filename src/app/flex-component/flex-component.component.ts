import { Component, HostBinding, Input } from '@angular/core';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

@Component({
  selector: 'flex-component',
  templateUrl: './flex-component.component.html',
  styleUrls: ['./flex-component.component.css']
})
export class FlexComponentComponent {
  @Input() flexDirection: FlexDirection = 'row';
  @HostBinding('style.display') get display() {
    return 'flex';
  }

  @HostBinding('style.flex-direction') get direction() {
    return this.flexDirection;
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @Input() checked!: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log('Init toggle');
  }

  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}

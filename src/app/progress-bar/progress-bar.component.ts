import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  private _progress!: number;

  @Input() set progress(value: number) {
    console.log('ABC');
    this._progress = value;
  }

  get progress() {
    return this._progress;
  }

  @Input() backgroundColor: string = '#ccc';
  @Input() progressColor!: string;

  constructor() {
    // Hàm này sẽ được gọi đầu tiên
    console.log(this.progress + " " + this.backgroundColor + " " + this.progressColor);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('progress' in changes) {
      console.log('Changed: progress');
    }
  }

  ngOnInit(): void {
    // Sẽ được gọi sau khi input được binding
    console.log('Hello');
  }
}

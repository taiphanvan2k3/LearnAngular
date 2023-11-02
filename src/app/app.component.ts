import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isChecked: boolean = true;

  @ViewChild('toggleComponent') toggleComponent!: ToggleComponent;
  @ViewChild('inputComponent', { static: true }) inputComponent!: ElementRef<HTMLInputElement>;
  @ViewChildren('inputComponent_') listInputComponent!: QueryList<ElementRef<HTMLInputElement>>;

  ngOnInit() {
    setTimeout(() => {
      this.inputComponent.nativeElement.style.color = 'red';
      this.inputComponent.nativeElement.focus();
    }, 3000);
  }

  ngAfterViewInit() {
    // Property listInputComponent chỉ được khởi tạo sau khi ngOnInit được thực hiện xong và view được cập nhật
    console.log('After init: ', this.toggleComponent);
    console.log(this.toggleComponent);
    this.listInputComponent.forEach((element) => element.nativeElement.style.color = 'blue');
  }
}

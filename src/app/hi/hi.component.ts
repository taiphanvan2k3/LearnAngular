import { Component } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent {
  username: string = '';
  password: string = '';
  test1: string = '';
  test2: string = '';

  user = {
    name: 'Phan Văn Tài',
    age: 20
  };

  handler() {
    // Một khi thay đổi ở đây thì các HTMLElement bên kia cũng sẽ được thay đổi dữ liệu
    alert('Hello');
  }

  login() {
    console.log(this.username, this.password);
    this.username = this.username.toUpperCase();
  }

  onTestChange(value: string) {
    // Xử lý khi có sự thay đổi trong trường nhập dữ liệu
    console.log('Test changed:', value);
  }

  onInputChange(event: any) {
    console.log(event.target?.value);
  }

  testButtonClick() {
    console.log(this.test1);
  }
}

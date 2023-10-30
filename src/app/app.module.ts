import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { FormsModule } from '@angular/forms';
import { ExampleLesson4Component } from './example-lesson4/example-lesson4.component';

@NgModule({
  declarations: [
    AppComponent,

    // Bỏ component mới tạo vào đây để có thể dùng được trong các file html
    HelloComponent,
    HiComponent,
    ExampleLesson4Component
  ],
  imports: [
    // Dùng FormsModule để thực hiện binding 2 chiều
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

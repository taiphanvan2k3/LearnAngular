import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLesson4Component } from './example-lesson4.component';

describe('ExampleLesson4Component', () => {
  let component: ExampleLesson4Component;
  let fixture: ComponentFixture<ExampleLesson4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleLesson4Component]
    });
    fixture = TestBed.createComponent(ExampleLesson4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

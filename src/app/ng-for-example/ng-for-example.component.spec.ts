import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForExampleComponent } from './ng-for-example.component';

describe('NgForExampleComponent', () => {
  let component: NgForExampleComponent;
  let fixture: ComponentFixture<NgForExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgForExampleComponent]
    });
    fixture = TestBed.createComponent(NgForExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

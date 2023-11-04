import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexComponentComponent } from './flex-component.component';

describe('FlexComponentComponent', () => {
  let component: FlexComponentComponent;
  let fixture: ComponentFixture<FlexComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexComponentComponent]
    });
    fixture = TestBed.createComponent(FlexComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

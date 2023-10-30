import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxComponentComponent } from './box-component.component';

describe('BoxComponentComponent', () => {
  let component: BoxComponentComponent;
  let fixture: ComponentFixture<BoxComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxComponentComponent]
    });
    fixture = TestBed.createComponent(BoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

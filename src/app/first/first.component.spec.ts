import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';

xdescribe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponent]
    });
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

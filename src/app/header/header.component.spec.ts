import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled : HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement 
    fixture.detectChanges();
  });

  it('should create Header component', () => {
    expect(component).toBeTruthy();
  });

  it('should match Niranjan Abathurai ', () => {
    expect(compiled.querySelector('#nameHeader')?.textContent).toEqual('Niranjan Abathurai')
  });

});

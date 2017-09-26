import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { JessyComponent } from './jessy.component';

describe('Component: About', () => {
  let component: JessyComponent;
  let fixture: ComponentFixture<JessyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JessyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JessyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the string "Jessy" in h4', () => {
    const el = fixture.debugElement.query(By.css('h4')).nativeElement;
    expect(el.textContent).toContain('Jessy');
  });

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UIButtonModule } from './button.module';
import { UIButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ButtonComponent', () => {
  let component: UIButtonComponent;
  let fixture: ComponentFixture<UIButtonComponent>;
  let buttonDe: DebugElement;
  let buttonEl: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ UIButtonModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    buttonDe = fixture.debugElement.query(By.css('.ui-button'));
    buttonEl = buttonDe.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    spyOn(component.buttonClick, 'emit');
    buttonEl.click();
    expect(component.buttonClick.emit).toHaveBeenCalledWith();
  });
});

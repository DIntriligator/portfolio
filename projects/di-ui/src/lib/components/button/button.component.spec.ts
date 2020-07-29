import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DIButtonModule } from './button.module';
import { DIButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ButtonComponent', () => {
  let component: DIButtonComponent;
  let fixture: ComponentFixture<DIButtonComponent>;
  let buttonDe: DebugElement;
  let buttonEl: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DIButtonModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DIButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    buttonDe = fixture.debugElement.query(By.css('.di-button'));
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DIButtonModule } from './button.module';
import { DIButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: DIButtonComponent;
  let fixture: ComponentFixture<DIButtonComponent>;
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
    buttonEl = fixture.debugElement.query(By.directive(DIButtonComponent)).nativeElement;
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

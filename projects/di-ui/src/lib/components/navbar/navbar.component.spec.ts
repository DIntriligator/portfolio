import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UINavbarComponent } from './navbar.component';
import { UINavbarModule } from './navbar.module';
import { UINavbarItemComponent } from './navbar-item/navbar-item.component';
import { QueryList, TemplateRef } from '@angular/core';
import { by } from 'protractor';
import { By } from '@angular/platform-browser';

describe('UINavbarComponent', () => {
  let component: UINavbarComponent;
  let fixture: ComponentFixture<UINavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ UINavbarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UINavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

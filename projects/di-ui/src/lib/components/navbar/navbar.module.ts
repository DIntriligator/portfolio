import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UINavbarComponent } from './navbar.component';
import { UINavbarTitleModule } from './navbar-title/navbar-title.module';
import { UISiteWrapperModule } from '../site-wrapper/site-wrapper.module';
import { UINavbarItemModule } from './navbar-item/navbar-item.module';

@NgModule({
  declarations: [
    UINavbarComponent
  ],
  imports: [
    CommonModule,
    UINavbarTitleModule,
    UINavbarItemModule,
    UISiteWrapperModule
  ],
  exports: [
    UINavbarComponent,
    UINavbarTitleModule,
    UINavbarItemModule,
    UINavbarItemModule
  ]
})
export class UINavbarModule { }

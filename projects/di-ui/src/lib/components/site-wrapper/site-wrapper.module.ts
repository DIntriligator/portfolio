import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UISiteWrapperComponent } from './site-wrapper.component';

@NgModule({
  declarations: [UISiteWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [UISiteWrapperComponent]
})
export class UISiteWrapperModule { }

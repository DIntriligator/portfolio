import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { UISiteWrapperModule } from '../../../projects/di-ui/src/lib/components/site-wrapper/site-wrapper.module';

@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    UISiteWrapperModule
  ]
})
export class WorkModule { }

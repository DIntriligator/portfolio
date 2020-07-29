import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { UISiteWrapperModule } from '../../../projects/di-ui/src/lib/components/site-wrapper/site-wrapper.module';
import { UICardModule } from '../../../projects/di-ui/src/lib/components/card/card.module';

@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    UISiteWrapperModule,
    UICardModule
  ]
})
export class WorkModule { }

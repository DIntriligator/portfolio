import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { UISiteWrapperModule } from '../../../projects/di-ui/src/lib/components/site-wrapper/site-wrapper.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    UISiteWrapperModule
  ]
})
export class ContactModule { }

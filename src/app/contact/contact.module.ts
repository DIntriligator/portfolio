import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { UISiteWrapperModule } from '../../../projects/di-ui/src/lib/components/site-wrapper/site-wrapper.module';
import { UICardModule } from '../../../projects/di-ui/src/lib/components/card/card.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    UISiteWrapperModule,
    UICardModule
  ]
})
export class ContactModule { }

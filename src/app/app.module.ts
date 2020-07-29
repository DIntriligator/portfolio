import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIButtonModule } from '../../projects/di-ui/src/lib/components/button/button.module';
import { UISiteWrapperModule } from '../../projects/di-ui/src/lib/components/site-wrapper/site-wrapper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIButtonModule,
    UISiteWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }

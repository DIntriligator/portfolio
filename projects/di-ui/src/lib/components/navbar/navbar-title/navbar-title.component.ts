import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'ui-navbar-title',
  templateUrl: './navbar-title.component.html',
  styleUrls: ['./navbar-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UINavbarTitleComponent {
  @ViewChild(TemplateRef) content: TemplateRef<any>;

  constructor() { }
}

import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ui-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UINavbarItemComponent {
  @ViewChild(TemplateRef) content: TemplateRef<any>;

  @Output() navItemClicked = new EventEmitter<void>();

  @Input() icon = '';
  @Input() active = false;

  constructor() { }
}

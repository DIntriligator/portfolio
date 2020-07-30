import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { DiColorType } from '../../types/color-types';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIButtonComponent {
  @Input() theme: DiColorType = 'default';
  @Input() socialColor = '';
  @Input() icon = '';
  @Input() disabled = false;

  @Output() buttonClick = new EventEmitter<void>();

  constructor() { }

  onButtonClick() {
    this.emitClick();
  }

  private emitClick() {
    this.buttonClick.emit();
  }

}

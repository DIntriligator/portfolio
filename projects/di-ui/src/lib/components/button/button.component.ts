import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { DiColorType } from '../../types/color-types';

@Component({
  selector: 'di-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DIButtonComponent {
  @Input() colorType: DiColorType = 'DEFAULT';

  @Output() buttonClick = new EventEmitter<void>();

  constructor() { }

  onButtonClick() {
    this.emitClick();
  }

  private emitClick() {
    this.buttonClick.emit();
  }

}
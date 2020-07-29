import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-button-area',
  templateUrl: './button-area.component.html',
  styleUrls: ['./button-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UIButtonAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

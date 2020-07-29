import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-site-wrapper',
  templateUrl: './site-wrapper.component.html',
  styleUrls: ['./site-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UISiteWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

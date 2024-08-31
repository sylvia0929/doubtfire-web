/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: 'analytics.component.html',
  styleUrls: ['analytics.component.scss'],
})
export class AnalyticsComponent {
  @Input() task: any;
  @Input() taskDef: any;
  @Input() unit: any;
}

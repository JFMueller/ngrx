import { Injectable } from '@angular/core';

@Injectable()
export class PerformanceLogService {

  private applicationStartup: number;

  constructor() {
    this.applicationStartup = window.performance.now();
  }

  log(object: any): void {
    console.log(object);
  }
}

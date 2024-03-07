import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  error(message: string): void {
    console.error(message);
  }

  info(message: string): void {
    console.log(message);
  }
}

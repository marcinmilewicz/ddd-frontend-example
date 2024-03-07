import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoggerService } from '@ddd-hrm/logger';
import { catchError, tap, throwError } from 'rxjs';

const createMsg = (req: HttpRequest<any>, started: number) => {
  const elapsed = Date.now() - started;
  return `${req.method} "${req.urlWithParams}" in ${elapsed} ms.`;
};

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const logger: LoggerService = inject(LoggerService);
  const started = Date.now();
  return next(req).pipe(
    tap(() => logger.info(createMsg(req, started))),
    catchError((error) => {
      logger.error(`${createMsg(req, started)} | ${error.error.message}`);

      return throwError(() => error);
    })
  );
};

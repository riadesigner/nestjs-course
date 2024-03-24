import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('New request!');
    const now = Date.now();

    return next.handle()
        .pipe(
            tap(() => {
              console.log(`\nExecution time: ${Date.now() - now}ms`);
              console.log('\nRequest was successful!');
            })
        )
  }
}

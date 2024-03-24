import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadGatewayException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('New http request!');
    return next.handle().pipe(
      map((data) => {
        console.log('data=', data);

        return {
          status: 'success',
          data: data,
        };
      }),
      catchError((err) => {
        return throwError(
          () =>
            new BadGatewayException({
              status: 'fail',
              data: err.response,
            }),
        );
      }),
    );
  }
}

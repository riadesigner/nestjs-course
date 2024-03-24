import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = exception.getStatus() || 500;
    const answer = {
      timestamp: new Date().toISOString(),
      status: 'fail',
      data: { path: request.url },
      code: statusCode,
    };

    response.status(statusCode).json(answer);
  }
}

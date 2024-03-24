import {MessageBody, SubscribeMessage, WebSocketGateway, WsException, WsResponse} from '@nestjs/websockets';
import {UseFilters, UseGuards, UseInterceptors, UsePipes} from "@nestjs/common";
import { WsExceptionFilter } from "./ws.exception.filter";
import {AgeValidationPipe} from "./age.validation.pipe";
import {DailyGuard} from "./daily.guard";
import {LogInterceptor} from "./log.interceptor";

@WebSocketGateway({ cors: true })
export class AppGateway {

  @UseFilters(new WsExceptionFilter)
  @SubscribeMessage('produce-error')
  handleMessage(client: any, payload: any): string {
    throw new WsException('Ooops!');

    return 'Hello world!';
  }


  @SubscribeMessage('get-age')
  handleAge(
      @MessageBody('age', AgeValidationPipe) age: string,
      client: any,
      payload: any
  ): WsResponse<string> {
    return { event: 'age', data: age };
  }

  @UseGuards(DailyGuard)
  @SubscribeMessage('get-date')
  handleDate(
      client: any,
      payload: any
  ): any {
    return {
      date: (new Date).getDate()
    };
  }

  @UseInterceptors(new LogInterceptor)
  @SubscribeMessage('version')
  handleVersion(): string {
    return '2.0.7';
  }
}

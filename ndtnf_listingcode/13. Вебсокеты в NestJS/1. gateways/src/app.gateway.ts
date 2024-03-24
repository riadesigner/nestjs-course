import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WsResponse,
  WebSocketServer
} from '@nestjs/websockets';

import { Socket, Server } from 'socket.io';
import {from, Observable} from "rxjs";
import {map} from "rxjs/operators";

@WebSocketGateway({ cors: true })
export class AppGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('hello')
  handleHelloMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
  @SubscribeMessage('message')
  handleMessage(
      @MessageBody() data: string,
      @ConnectedSocket() client: Socket
  ): string {
    return data
  }
  @SubscribeMessage('events')
  onEvent(): Observable<WsResponse<number>> {
    const event = 'events';
    const response = [1, 2, 3];
    return from(response).pipe(
        map(data => ({ event, data })),
    );
  }
  @SubscribeMessage('server')
  onEventWithServer() {
    console.log(this.server.sockets);
    return 'OK';
  }
}

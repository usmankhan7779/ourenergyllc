import { Injectable } from '@angular/core';
import { QueueingSubject } from 'queueing-subject'
import { Observable } from 'rxjs/Observable'
import { WebSocketService } from 'angular2-websocket-service'
import 'rxjs/add/operator/share'

@Injectable()
export class ServerSocketService {
  private inputStream: QueueingSubject<any>
  public outputStream: Observable<any>

  constructor(private socketFactory: WebSocketService) { }

  ticket = localStorage.getItem('token');

  public connect() {
    if (this.outputStream) { return this.outputStream }
    return this.outputStream = this.socketFactory.connect('wss://apis.wattcrm.com/?token=' + this.ticket, this.inputStream = new QueueingSubject<any>()).share()
  }

  public send(message: any): void {
    this.inputStream.next(message)
  }
}
import { Injectable } from '@nestjs/common';
import { filter, fromEvent, Subject } from 'rxjs';

@Injectable()
export class AppService {

  private events = new Subject()

  subscribe(userId: number) {
    return this.events.asObservable().pipe(
      //@ts-ignore
      filter(event => event.userId === userId)
    )
  }

  getHello(): string {
    return 'Hello World!';
  }

  async saveTask(userId) {
    this.checksumTask(userId)
    return "taskSaved !"
  }
  
  async checksumTask(userId) {
    // await 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000)); 
    this.events.next({ userId: userId, data: 'test' })
  }
}

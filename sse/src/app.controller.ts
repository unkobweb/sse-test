import { Body, Controller, Get, Post, Query, Sse } from '@nestjs/common';
import { interval, map } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Sse('sse')
  sse(
    @Query('user') user: number
  ) {
    console.log('sse', user)
    return this.appService.subscribe(user)
  }

  @Post()
  post(
    @Query('user') user: number
  ) {
    console.log('post', user)
    return this.appService.saveTask(user);
  }
}

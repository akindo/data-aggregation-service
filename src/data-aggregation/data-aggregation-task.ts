import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  @Cron('*/2 * * * *')
  handleCron() {
    // todo: query Transactions API and store in e. g. Redis
    // Be sure to add retry and timeout logic
  }
}

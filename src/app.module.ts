import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { DataAggregationModule } from './data-aggregation/data-aggregation.module';

@Module({
  imports: [DataAggregationModule, ScheduleModule.forRoot()],
})
export class AppModule {}

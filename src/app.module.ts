import { Module } from '@nestjs/common';
import { DataAggregationModule } from './data-aggregation/data-aggregation.module';

@Module({
  imports: [DataAggregationModule],
})
export class AppModule {}

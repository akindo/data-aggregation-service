import { Module } from '@nestjs/common';
import { TransactionService } from 'src/infrastructure/transaction/repositories/transaction-service';
import { DataAggregationController } from './data-aggregation.controller';
import { DataAggregationService } from './data-aggregation.service';

@Module({
  imports: [],
  controllers: [DataAggregationController],
  providers: [DataAggregationService, TransactionService],
})
export class DataAggregationModule {}

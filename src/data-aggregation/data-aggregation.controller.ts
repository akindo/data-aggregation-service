import { Controller, Get } from '@nestjs/common';
import { DataAggregationService } from './data-aggregation.service';

@Controller()
export class DataAggregationController {
  constructor(
    private readonly dataAggregationService: DataAggregationService,
  ) {}

  @Get()
  getHello(): string {
    return this.dataAggregationService.getHello();
  }

  // Get aggregated data by user Id: balance, earned, spent, payout, paid out
  // Get list of requested payouts (user ID, payout amount), if there are several payouts requested by a user, then the amount must be aggregated into one.
}

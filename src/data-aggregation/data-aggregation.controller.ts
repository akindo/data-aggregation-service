import { Controller, Get, Param } from '@nestjs/common';
import { DataAggregationService } from './data-aggregation.service';
import { Transaction } from './entities/transaction';
import { UserAggregatedData } from './entities/user-aggregated-data';

@Controller()
export class DataAggregationController {
  constructor(
    private readonly dataAggregationService: DataAggregationService,
  ) {}

  // Get aggregated data by user ID: balance, earned, spent, payout, paid out.
  @Get('/aggregated-data/:userId')
  getAggregatedData(@Param() params: { userId: string }): UserAggregatedData {
    return this.dataAggregationService.getAggregatedData(params.userId);

    // Contrived example of mapping the transactions to a DTO. Would be relevant if client don't need the entire domain entity.
    // return aggregatedData.map(
    //   (transaction) =>
    //     new AggregatedDataResponseDto(
    //       transaction.id,
    //       transaction.userId,
    //       transaction.createdAt,
    //       transaction.type,
    //       transaction.amount,
    //     ),
    // );
  }

  // Get list of requested payouts (user ID, payout amount).
  // If there are several payouts requested by a user, the amounts must be aggregated into one.
  @Get('requested-payouts')
  getRequestedPayouts(): Transaction[] {
    return this.dataAggregationService.getRequestedPayouts();
  }
}

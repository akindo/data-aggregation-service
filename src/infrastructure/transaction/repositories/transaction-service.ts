import { Injectable } from '@nestjs/common';
import { TransactionItem } from '../dto/transaction-response';
import { readMockTransactionApiResponse } from './utils';

@Injectable()
export class TransactionService {
  private readonly transactions = readMockTransactionApiResponse();

  // Get aggregated data by user ID: balance, earned, spent, payout, paid out.
  getById(userId: string): TransactionItem[] {
    console.log('userId', userId);
    return this.transactions.items.filter(
      (transaction) => transaction.userId === userId,
    );
  }

  getRequestedPayouts(): TransactionItem[] {
    // todo: only return user ID and payout amount instead of TransactionItem
    // todo: If there are several payouts requested by a user, the amounts must be aggregated into one.
    return this.transactions.items.filter(
      (transaction) => transaction.type === 'payout' && transaction.amount > 0,
    );
  }
}

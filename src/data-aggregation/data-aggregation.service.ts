import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TransactionService } from 'src/infrastructure/transaction/repositories/transaction-service';
import { Transaction } from './entities/transaction';
import { UserAggregatedData } from './entities/user-aggregated-data';

@Injectable()
export class DataAggregationService {
  constructor(private readonly transactionService: TransactionService) {}

  private getBalance(transactions: Transaction[]): number {
    return transactions.reduce((balance, transaction) => {
      if (transaction.type === 'earned') {
        return balance + transaction.amount;
      } else if (
        transaction.type === 'spent' ||
        transaction.type === 'payout'
      ) {
        return balance - transaction.amount;
      } else {
        return balance;
      }
    }, 0);
  }

  private getEarned(transactions: Transaction[]): number {
    return transactions.reduce((balance, transaction) => {
      if (transaction.type === 'earned') {
        return balance + transaction.amount;
      } else {
        return balance;
      }
    }, 0);
  }

  private getSpent(transactions: Transaction[]): number {
    return transactions.reduce((balance, transaction) => {
      if (transaction.type === 'spent') {
        return balance + transaction.amount;
      } else {
        return balance;
      }
    }, 0);
  }

  private getPayOut(transactions: Transaction[]): number {
    return transactions.reduce((balance, transaction) => {
      if (transaction.type === 'payout') {
        return balance + transaction.amount;
      } else {
        return balance;
      }
    }, 0);
  }

  getAggregatedData(userId: string): UserAggregatedData {
    // Request limits:
    // Minute: 5
    // Day: 1000
    // So we can do max 41 an hour and hence 0.68 a minute, which fits within the requirement that data can be max 2
    // min. old.

    // Call the mocked transaction service
    // todo: replace with fetching from cache instead
    const transactionResponse = this.transactionService.getById(userId);

    if (transactionResponse.length === 0) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `No transactions for user ID ${userId}.`,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    // todo: add error handling for missing or bad data
    const transactions = transactionResponse.map(
      (transaction) =>
        new Transaction(
          transaction.id,
          transaction.userId,
          transaction.createdAt,
          transaction.type,
          transaction.amount,
        ),
    );

    const sortedTransactions = transactions.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    );

    const balance = this.getBalance(sortedTransactions);
    const earned = this.getEarned(sortedTransactions);
    const spent = this.getSpent(sortedTransactions);
    const payOut = this.getPayOut(sortedTransactions);

    return new UserAggregatedData(userId, balance, earned, spent, payOut);
  }

  getRequestedPayouts(): Transaction[] {
    return this.transactionService.getRequestedPayouts();
  }
}

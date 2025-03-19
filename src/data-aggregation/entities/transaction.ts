export class Transaction {
  constructor(
    public id: string,
    public userId: string,
    public createdAt: string,
    public type: 'payout' | 'spent' | 'earned',
    public amount: number,
  ) {}
}

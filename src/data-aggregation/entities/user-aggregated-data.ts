export class UserAggregatedData {
  constructor(
    public id: string,
    public balance: number,
    public earned: number,
    public spent: number,
    public payOut: number,
  ) {}
}

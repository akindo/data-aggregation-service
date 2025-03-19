export interface TransactionResponse {
  items: TransactionItem[];
  meta: MetaData;
}

export interface TransactionItem {
  id: string;
  userId: string;
  createdAt: string;
  type: 'payout' | 'spent' | 'earned';
  amount: number;
}

export interface MetaData {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

import * as fs from 'fs';
import * as path from 'path';
import { TransactionResponse } from '../dto/transaction-response';

export function readMockTransactionApiResponse(): TransactionResponse {
  const filePath = path.resolve(
    __dirname,
    'data/transaction-api-response.json',
  );
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent) as TransactionResponse; // todo: add validation
}

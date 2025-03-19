import { Test, TestingModule } from '@nestjs/testing';
import { DataAggregationController } from './data-aggregation.controller';
import { DataAggregationService } from './data-aggregation.service';

describe('AppController', () => {
  let dataAggregationController: DataAggregationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DataAggregationController],
      providers: [DataAggregationService],
    }).compile();

    dataAggregationController = app.get<DataAggregationController>(
      DataAggregationController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(
        dataAggregationController.getAggregatedData({ userId: '074092' }),
      ).toBe(
        '{"id":"074092","balance":-40.8,"earned":1.2,"spent":12,"payOut":30}⏎',
      );
    });
  });
});

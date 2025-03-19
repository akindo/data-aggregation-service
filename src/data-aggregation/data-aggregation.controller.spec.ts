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
      expect(dataAggregationController.getHello()).toBe('Hello World!');
    });
  });
});

# Data aggregation service

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Query API

Get aggregated data by user ID: balance, earned, spent, payout, paid out.
```bash
curl http://localhost:3000/aggregated-data/074092
```

Get list of requested payouts.
```bash
curl http://localhost:3000/requested-payouts
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Testing strategy
An optimal testing strategy would include ensuring DDD principles are maintained, such that unit tests can be kept short and simple, and testing core logic. Tests should be included for every new feature, and a high code coverage should be strived for. Ideally 100%, at least in the domain part of the service. 

If I'd had more time, I would've implemented an automated TDD approach such that I'd always have be running the `test:watch` npm script in one terminal, continously re-running all tests upon every file save. Copilot can be used to quickly generate tests, helping us get higher coverage in a shorter amount of time. Copilot generated code should of course always be carefully inspected and evaluated.
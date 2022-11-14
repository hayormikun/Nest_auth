import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: any, res: any, next: NextFunction) {
    console.log('validate account middleware');

    const { valid } = req.headers;
    if (!valid) return res.status(401).send({ msg: 'Not a valid account' });

    if (valid === 'true') next();
    else return res.status(401).send({ msg: 'Account is disabled' });
  }
}

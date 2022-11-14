import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/typeorm';

export const userConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'bolakale',
  database: 'nest_demo',
  entities: [User],
  synchronize: true,
};

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userConfig } from './config/userConfig.config';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    CustomersModule,
    UsersModule,
    TypeOrmModule.forRoot(userConfig),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

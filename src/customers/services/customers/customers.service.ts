import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { ICustomer } from 'src/customers/interfaces/Customer';

@Injectable()
export class CustomersService {
  private customers: ICustomer[] = [
    {
      id: 1,
      email: 'favour@go.com',
      name: 'favour west',
    },

    {
      id: 2,
      email: 'ayomikun@go.com',
      name: 'ayo joro',
    },

    {
      id: 3,
      email: 'dan@go.com',
      name: 'dan doe',
    },
  ];

  getCustomers() {
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}

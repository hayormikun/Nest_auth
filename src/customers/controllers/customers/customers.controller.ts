import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  // @Get(':id')
  // getCustomer(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Req() req: Request,
  //   @Res() res: Response,
  // ) {
  //   const customer = this.customersService.findCustomerById(id);
  //   if (customer) {
  //     res.send(customer);
  //   } else {
  //     res.status(400).send({ msg: 'customer not found' });
  //   }
  // }

  @Get('')
  getAllCustomers() {
    return this.customersService.getCustomers();
  }

  @Get('/:id')
  findCustomer(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) return customer;
    else throw new HttpException('customer not found', HttpStatus.BAD_REQUEST);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersService.createCustomer(createCustomerDto);
  }
}

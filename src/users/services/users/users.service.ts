import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { User } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { IUser, SerializedUser } from 'src/users/interfaces';
import { hashPassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  private users: IUser[] = [];

  getUsers() {
    return this.users.map(
      (user) =>
        // plainToClass(SerializedUser, user)

        new SerializedUser(user),
    );
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  createUser(createUserDto: CreateUserDto) {
    const password = hashPassword(createUserDto.password);
    console.log(password);

    const newUser = this.userRepository.create({ ...createUserDto, password });
    return this.userRepository.save(newUser);
  }

  findUserByUsername(username: string) {
    return this.userRepository.findOneBy({ username });
  }

  findUserById(id: number) {
    return this.userRepository.findOneBy({ id });
  }
}

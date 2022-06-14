import { Injectable } from '@nestjs/common';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'name',
      password: 'qwertyui',
    },
  ];

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async findAll(): Promise<User[] | undefined> {
    console.log(this.users);
    return this.users;
  }
}

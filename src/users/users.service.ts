import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { User } from './entities/users.entity';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return await this.prisma.user.create({ data });
  }

  async findOne(username: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: username,
    });
    // return this.users.find((user) => user.username === username);
  }

  async findAll(params: {
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[] | null> {
    const { orderBy } = params;
    return await this.prisma.user.findMany({
      orderBy,
    });
  }
}

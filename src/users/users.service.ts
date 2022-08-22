import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly User = [
    {
      userId: 1,
      username: process.env.USERSERVICE_USERNAME,
      password: process.env.USERSERVICE_PASSWORD,
    },
  ];

  async findOne(username: string): Promise<any> {
    return this.User.find((user) => user.username === username);
  }
}

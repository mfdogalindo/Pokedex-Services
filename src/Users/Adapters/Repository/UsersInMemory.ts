import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/Users/Domain/Models/User.entity';
import { UsersRepository } from './UsersRepository';

@Injectable()
export class UsersInMemory implements UsersRepository {
  private readonly users: UserEntity[] = [];

  async findById(id: string): Promise<UserEntity | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async findByEmail(email: string): Promise<UserEntity | undefined> {
    return this.users.find((user) => user.email === email);
  }

  create(user): Promise<UserEntity> {
    this.users.push(user);
    return new Promise((resolve) => resolve(user));
  }

  async validateCredentials(
    email: string,
    password: string,
  ): Promise<UserEntity | undefined> {
    return this.users.find(
      (user) => user.email === email && user.password === password,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { User } from '../../Domain/Models/User.model';
import { UsersRepository } from './UsersRepository';

@Injectable()
export class UsersInMemory implements UsersRepository {
  private readonly users: User[] = [];

  async findById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  create(user): Promise<User> {
    this.users.push(user);
    return new Promise((resolve) => resolve(user));
  }

  async validateCredentials(
    email: string,
    password: string,
  ): Promise<User | undefined> {
    return this.users.find(
      (user) => user.email === email && user.password === password,
    );
  }
}

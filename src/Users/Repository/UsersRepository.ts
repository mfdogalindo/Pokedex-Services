import { User } from '../Models/User';

export interface UsersRepository {
  findAll(): Promise<User[]>;
  create(user: User): Promise<User>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export const UsersRepository = Symbol('UsersRepository');

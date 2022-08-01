import { User } from '../../Domain/Models/User.model';

export interface UsersRepository {
  create(user: User): Promise<User>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
}

export const UsersRepository = Symbol('UsersRepository');

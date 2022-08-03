import { UserEntity } from 'src/Users/Domain/Models/User.entity';

export interface UsersRepository {
  create(user: UserEntity): Promise<UserEntity>;
  findById(id: string): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity>;
}

export const UsersRepository = Symbol('UsersRepository');

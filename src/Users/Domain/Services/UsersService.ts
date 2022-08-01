import { Inject, Injectable } from '@nestjs/common';
import { PasswordUtils } from 'src/Common/Utils/PasswordValidator';
import { UsersExceptions } from '../Exceptions/UsersExceptions';
import { User } from '../Models/User.model';
import { UsersRepository } from '../../Adapters/Repository/UsersRepository';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UsersRepository) private readonly usersRepository: UsersRepository,
  ) {}

  async create(name: string, email: string, password: string): Promise<User> {
    email = email.replace(/\s/g, '');

    if (await this.usersRepository.findByEmail(email)) {
      throw UsersExceptions.UserEmailAlreadyUsed();
    }

    const { isValid, errors } = PasswordUtils.Validator(password);

    if (!isValid) {
      throw UsersExceptions.InvalidPassword(errors);
    }

    password = PasswordUtils.Hash(password, email);

    const user = new User(name, email, password);

    return this.usersRepository.create(user);
  }

  async findById(id: string): Promise<User> {
    const res = await this.usersRepository.findById(id);
    return res;
  }

  async validateCredentials(email: string, password: string): Promise<User> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      UsersExceptions.UserNotFound();
    }

    password = PasswordUtils.Hash(password, email);
    if (user.password === password) {
      return user;
    }
    return null;
  }
}

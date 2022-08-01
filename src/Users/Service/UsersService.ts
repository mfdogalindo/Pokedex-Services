import { Inject, Injectable } from '@nestjs/common';
import { PasswordUtils } from 'src/Common/Utils/PasswordValidator';
import { UsersExceptions } from '../Exceptions/UsersExceptions';
import { User } from '../Models/User';
import { UsersRepository } from '../Repository/UsersRepository';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UsersRepository) private readonly usersRepository: UsersRepository,
  ) {}

  async create(name: string, email: string, password: string): Promise<User> {
    email = email.replace(/\s/g, '');

    if (await this.usersRepository.findByEmail(email)) {
      UsersExceptions.UserEmailAlreadyUsed();
    }

    const { isValid, errors } = PasswordUtils.Validator(password);

    if (!isValid) {
      UsersExceptions.InvalidPassword(errors);
    }

    password = PasswordUtils.Hash(password, email);

    const user = new User(name, email, password);

    return this.usersRepository.create(user);
  }

  findById(id: string): Promise<User> {
    return this.usersRepository.findById(id);
  }

  validateCredentials(email: string, password: string): User | void {
    this.usersRepository
      .findByEmail(email)
      .then((user) => {
        password = PasswordUtils.Hash(password, email);
        if (user.password == password) {
          return user;
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { PasswordUtils } from 'src/Common/Utils/PasswordValidator';
import {
  InvalidPasswordException,
  UserEmailAlreadyUsedException,
  UserNotFoundException,
} from '../Exceptions/UsersExceptions';
import { User } from '../Models/User.model';
import { UsersRepository } from '../../Adapters/Repository/UsersRepository';
import { UsersEntityToUser } from 'src/Users/Ports/Mappers/UsersEntityToUser';
import { UserEntity } from '../Models/User.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UsersRepository) private readonly usersRepository: UsersRepository,
  ) {}

  async create(name: string, email: string, password: string): Promise<User> {
    email = email.replace(/\s/g, '');

    if (await this.usersRepository.findByEmail(email)) {
      throw new UserEmailAlreadyUsedException();
    }

    const { isValid, errors } = PasswordUtils.Validator(password);

    if (!isValid) {
      throw new InvalidPasswordException(errors);
    }

    password = PasswordUtils.Hash(password, email);

    const userEntity = new UserEntity(name, email, password);

    await this.usersRepository.create(userEntity);

    return UsersEntityToUser(userEntity);
  }

  async findById(id: string): Promise<User> {
    const userEntity = await this.usersRepository.findById(id);
    return UsersEntityToUser(userEntity);
  }

  async validateCredentials(email: string, password: string): Promise<User> {
    const userEntity = await this.usersRepository.findByEmail(email);
    if (!userEntity) {
      throw new UserNotFoundException();
    }

    password = PasswordUtils.Hash(password, email);
    if (userEntity.password === password) {
      return UsersEntityToUser(userEntity);
    }
    return null;
  }
}

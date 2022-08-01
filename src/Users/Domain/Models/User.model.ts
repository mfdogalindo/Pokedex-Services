import { randomUUID } from 'crypto';
import { UserStatus } from './UserStatus.model';

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  userStatus: UserStatus;
  constructor(name: string, email: string, password: string) {
    this.id = randomUUID();
    this.email = email;
    this.name = name;
    this.password = password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.userStatus = UserStatus.ACTIVE;
  }
}

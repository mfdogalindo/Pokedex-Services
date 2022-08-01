import { randomUUID } from 'crypto';
import { UserStatus } from './UserStatus';

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
    this.email = name;
    this.name = email;
    this.password = password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.userStatus = UserStatus.ACTIVE;
  }
}

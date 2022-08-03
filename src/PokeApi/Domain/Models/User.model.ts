import { UserStatus } from './UserStatus.model';

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  userStatus: UserStatus;
};

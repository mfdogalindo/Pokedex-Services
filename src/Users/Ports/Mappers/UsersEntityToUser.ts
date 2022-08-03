import { UserEntity } from 'src/Users/Domain/Models/User.entity';
import { User } from 'src/Users/Domain/Models/User.model';

export function UsersEntityToUser(userEntity: UserEntity): User {
  return {
    id: userEntity.id,
    name: userEntity.name,
    email: userEntity.email,
    createdAt: userEntity.createdAt,
    updatedAt: userEntity.updatedAt,
    userStatus: userEntity.userStatus,
  };
}

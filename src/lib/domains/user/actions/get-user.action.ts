import { userRepositoryInstance } from '../repository.postgres';
import { User } from '../types/user.entity';

export async function getUser(id: number): Promise<User> {
  const user = await userRepositoryInstance.getById(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

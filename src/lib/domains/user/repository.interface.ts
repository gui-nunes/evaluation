import { User } from './types/user.entity';
import { CreateUserDTO } from './repository.postgres';

export interface IUserRepository {
  add(user: CreateUserDTO): Promise<User>;
  getByEmail(email: string): Promise<User>;
  getById(id: number): Promise<User>;
  update(id: number, data: Partial<User>): Promise<User>;
  delete(id: number): Promise<void>;
  getToLogin(email: string): Promise<{ email: string; password: string }>;
}

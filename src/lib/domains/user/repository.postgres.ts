import { DbService } from '@/lib/db/db-service';
import { User } from './types/user.entity';

export interface IUserRepository {
  add(user: CreateUserDTO): Promise<User>;
  get(id: number): Promise<User>;
  update(id: number, data: Partial<User>): Promise<User>;
  delete(id: number): Promise<void>;
}

export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
};
export class UserRepositoryPostgres extends DbService implements IUserRepository {
  constructor() {
    super();
    this.connect();
  }
  async add(user: CreateUserDTO): Promise<User> {
    const newUsr = await this.query({
      text: `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`,
      values: [user.name, user.email, user.password],
    });

    throw new Error('Method not implemented.');
  }
  async get(id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  async update(id: number, data: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }
  async delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

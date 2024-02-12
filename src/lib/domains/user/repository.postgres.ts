import { DbService } from '@/lib/db/db-service';
import { User } from './types/user.entity';
import { IUserRepository } from './repository.interface';

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
    return await this.query<User, [name: string, email: string, password: string]>({
      text: `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`,
      values: [user.name, user.email, user.password],
    })
      .then((result) => {
        return result.rows[0];
      })
      .catch((e) => {
        throw e;
      });
  }

  async getByEmail(email: string): Promise<User> {
    return await this.query<User, [string]>({
      text: `SELECT id, name, email FROM users WHERE email = $1;`,
      values: [email],
    })
      .then((result) => {
        return result.rows[0];
      })
      .catch((error) => {
        throw error;
      });
  }

  async getById(id: number): Promise<User> {
    return await this.query<User, [number]>({
      text: `SELECT id, name, email FROM users WHERE id = $1;`,
      values: [id],
    })
      .then((result) => {
        return result.rows[0];
      })
      .catch((error) => {
        throw error;
      });
  }

  async password(email: string): Promise<{ email: string; password: string }> {
    return await this.query<{ email: string; password: string }, [string]>({
      text: `SELECT email, password FROM users WHERE email = $1;`,
      values: [email],
    })
      .then((result) => {
        return result.rows[0];
      })
      .catch((error) => {
        throw error;
      });
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }
  async delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export const userRepositoryInstance = new UserRepositoryPostgres();
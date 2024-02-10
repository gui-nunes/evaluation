import { Role } from './types/role';
import { User } from './types/user.entity';

export class UserRepository {
  database: Array<User> = [];

  async add(name: string, role: Role): Promise<User> {
    this.database.push({
      id: this.database.length + 1,
      name,
      role,
    });
    return this.database[this.database.length - 1];
  }

  async get(id: number): Promise<User> {
    const user = this.database.find(user => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    const user = await this.get(id);
    this.database = this.database.map(user => {
      if (user.id === id) {
        return { ...user, ...data };
      }
      return user;
    });
    return Object.assign(user, data);
  }

  async delete(id: number): Promise<void> {
    await this.get(id);
    this.database = this.database.filter(user => user.id !== id);
  }
}

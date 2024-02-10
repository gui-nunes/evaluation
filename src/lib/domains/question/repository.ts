import { QuestionEntity } from './types/question.entity';

export class QuestionRepository {
  database: Array<QuestionEntity> = [];

  async add(title: string, description: string, competenceId: number): Promise<QuestionEntity> {
    this.database.push({
      id: this.database.length + 1,
      title,
      description,
      competenceId,
    });
    return this.database[this.database.length - 1];
  }

  async get(id: number): Promise<QuestionEntity> {
    const question = this.database.find(question => question.id === id);
    if (!question) {
      throw new Error('Question not found');
    }
    return question;
  }

  async update(id: number, data: Partial<QuestionEntity>): Promise<QuestionEntity> {
    const question = await this.get(id);
    this.database = this.database.map(question => {
      if (question.id === id) {
        return { ...question, ...data };
      }
      return question;
    });
    return Object.assign(question, data);
  }

  async deleteQuestion(id: number): Promise<void> {
    await this.get(id);
    this.database = this.database.filter(question => question.id !== id);
  }
}

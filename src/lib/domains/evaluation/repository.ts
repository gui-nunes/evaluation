import { User } from '../user/types/user.entity';
import { Evaluation } from './types/evaluation.entity';

export class EvaluationRepository {
  database: Array<Evaluation> = [];

  async addEvaluation(
    name: string,
    participants: Array<User>,
    questionsId: Array<number>
  ): Promise<Evaluation> {
    this.database.push({
      id: this.database.length + 1,
      name,
      participants,
      questionsId,
    });

    return this.database[this.database.length - 1];
  }

  async getEvaluation(id: number): Promise<Evaluation> {
    const evaluation = this.database.find(evaluation => evaluation.id === id);
    if (!evaluation) {
      throw new Error('Evaluation not found');
    }
    return evaluation;
  }

  async updateEvaluation(id: number, data: Partial<Evaluation>): Promise<Evaluation> {
    const evaluation = await this.getEvaluation(id);
    this.database = this.database.map(evaluation => {
      if (evaluation.id === id) {
        return { ...evaluation, ...data };
      }
      return evaluation;
    });
    return Object.assign(evaluation, data);
  }

  async deleteEvaluation(id: number): Promise<void> {
    await this.getEvaluation(id);
    this.database = this.database.filter(evaluation => evaluation.id !== id);
  }
}

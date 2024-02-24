import { User } from '../user/types/user.entity';
import { IEvaluationRepository } from './repository.interface';
import { BaseEvaluation } from './types/dto/base.evaluation.dto';
import { Evaluation } from './types/evaluation.entity';

export class EvaluationRepositoryPostgres implements IEvaluationRepository {
  async add(
    name: string,
    creatorId: number,
    participants: User[],
    questionsId: number[]
  ): Promise<Evaluation> {
    throw new Error('Method not implemented.');
  }
  get(id: number): Promise<Evaluation> {
    throw new Error('Method not implemented.');
  }
  getAllByUser(user: User): Promise<BaseEvaluation[]> {
    throw new Error('Method not implemented.');
  }
  update(id: number, data: Partial<Evaluation>): Promise<Evaluation> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

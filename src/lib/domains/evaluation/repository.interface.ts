import { User } from '../user/types/user.entity';
import { BaseEvaluation } from './types/dto/base.evaluation.dto';
import { Evaluation } from './types/evaluation.entity';

export interface IEvaluationRepository {
  add(
    name: string,
    creatorId: number,
    participants: Array<User>,
    questionsId: Array<number>
  ): Promise<Evaluation>;
  get(id: number): Promise<Evaluation>;
  getAllByUser(user: User): Promise<Array<BaseEvaluation>>;
  update(id: number, data: Partial<Evaluation>): Promise<Evaluation>;
  delete(id: number): Promise<void>;
}

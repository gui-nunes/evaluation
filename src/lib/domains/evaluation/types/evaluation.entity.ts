import { User } from '../../user/types/user.entity';

export type Evaluation = {
  id: number;
  name: string;
  participants: Array<User>;
  questionsId: Array<number>;
  creatorId: number;
};

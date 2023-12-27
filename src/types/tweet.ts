import { User } from '@/types/user';

export interface Tweet {
  text: string;
  author: User;
  date: string;
}

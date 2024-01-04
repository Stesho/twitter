import { User } from '@/types/user';

export interface Tweet {
  id: string;
  text: string;
  author: User;
  date: string;
  likes: string[];
}

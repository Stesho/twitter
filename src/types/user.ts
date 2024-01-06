export interface User {
  id: string;
  avatar: string;
  name: string;
  phoneNumber: string;
  email: string;
  birthday: string;
}

export type SignupUserData = Omit<User, 'id' | 'avatar'>;

export interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  birthday: string;
}

export type SignupUserData = Omit<User, "id">;

export interface User {
  _id: string;
  nickname?: string;
  email: string;
  password: string;
  realname?: string;
  forename?: string;
  message?: string;
  age?: number;
  bio?: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  userId?: number;
  id: number;
  title: string;
  body?: string;
  isNew?: boolean;
}
export interface User {
  id: number;
  name: string;
  username?: string;
  email?: string;
  isNew?: boolean;
}

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

// Types for AuthContext.tsx
export interface UserInfo {
  username: string;
  password?: string;
}
export interface AuthContextProps {
  user: UserInfo | null;
  login: (userData: UserInfo) => void;
  logout: () => void;
}

// DataContext Types
export interface DataContextType {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;

  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}
export interface ProtectedRouteProps {
  children: JSX.Element;
}

// DashboardCard Types
export interface DashboardCardProps {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// API Types
export interface CreateUserVars {
  name: string;
  username?: string;
  email?: string;
}

export interface UpdatePostVars {
  id: number;
  title: string;
  body?: string;
}

export interface UpdateUserVars {
  id: number;
  name: string;
  username?: string;
  email?: string;
}

export interface DeleteIdVars {
  id: number;
}

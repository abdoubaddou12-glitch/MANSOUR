
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface User {
  username: string;
  isAdmin: boolean;
}

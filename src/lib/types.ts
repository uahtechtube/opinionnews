export interface Category {
  name: string;
  slug: string;
}

export interface Comment {
  id: string;
  author: string;
  date: string;
  content: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  author: string;
  date: string;
  comments: Comment[];
}

export interface User {
  uid: string;
  email: string | null;
  name: string | null;
  role: 'Admin' | 'Editor' | 'User';
}

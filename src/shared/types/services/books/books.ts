import { Book } from '@shared/models/book';

export interface IBooksService {
  getTrendingBooks: () => Promise<Book>;
  getAuthor: (id: string) => Promise<Record<string, string>>;
}

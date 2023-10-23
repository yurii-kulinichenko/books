export interface IBooksService {
  getTrendingBooks: () => Promise<Record<string, string>>;
}

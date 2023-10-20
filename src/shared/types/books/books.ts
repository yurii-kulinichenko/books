export interface IBooksService {
  getBooks: () => Promise<Record<string, string>>;
}

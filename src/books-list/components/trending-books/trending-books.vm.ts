import { BooksService } from 'src/shared/services/books/books';
import { appMakeObservable, appObservable } from 'src/shared/utils/utils';

export class TrendingBooksViewModel {
  private readonly booksService = new BooksService();

  private _trendingBooks: Array<Record<string, string>> = [];
  private _loading: boolean = false;

  constructor() {
    appMakeObservable(this, {
      _trendingBooks: appObservable,
      _loading: appObservable,
    });

    this.getBooks();
  }

  get trendingBooks() {
    return this._trendingBooks;
  }

  get loading() {
    return this._loading;
  }

  getBooks = async () => {
    this._loading = true;
    try {
      const { works } = await this.booksService.getTrendingBooks();
      this._trendingBooks = works;
    } catch (e) {
      console.error(e);
    } finally {
      this._loading = false;
    }
  };
}

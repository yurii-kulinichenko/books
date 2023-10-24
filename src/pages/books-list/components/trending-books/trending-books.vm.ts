import { Book } from '@shared/models/book';
import { BooksService } from '@shared/services/books/books';
import { appMakeObservable, appObservable } from '@shared/utils/utils';

export class TrendingBooksViewModel {
  private readonly booksService = new BooksService();

  private _trendingBooks: Array<Book> = [];
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
      const books = works.filter((work) => work.cover_i);
      this._trendingBooks = books;
    } catch (e) {
      console.error(e);
    } finally {
      this._loading = false;
    }
  };
}

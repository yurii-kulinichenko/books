import { BooksService } from '@shared/services/books/books';
import { appMakeObservable, appObservable } from '@shared/utils';

export class AuthorViewModel {
  private readonly _bookService = new BooksService();

  private readonly _authorId = null;
  private _author = null;
  private _loading: boolean = false;

  constructor(id) {
    this._authorId = id;

    appMakeObservable(this, {
      _loading: appObservable,
      _author: appObservable,
    });
    this.getAuthor();
  }
  get author() {
    return this._author;
  }

  get loading() {
    return this._loading;
  }

  async getAuthor() {
    this._loading = true;
    try {
      const author = await this._bookService.getAuthor(this._authorId);
      this._author = author;
    } catch (e) {
      console.error(e);
    } finally {
      this._loading = false;
    }
  }
}

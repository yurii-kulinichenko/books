import axios from 'axios';

import { IBooksService } from '@shared/types/books/books';

axios.defaults.baseURL = 'https://openlibrary.org/';

export class BooksService implements IBooksService {
  async getTrendingBooks() {
    const { data } = await axios.get('/trending/daily.json');
    return data;
  }
}

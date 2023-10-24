import axios from 'axios';

import { IBooksService } from '@shared/types/services/books';

axios.defaults.baseURL = 'https://openlibrary.org/';

export class BooksService implements IBooksService {
  async getTrendingBooks() {
    const { data } = await axios.get('/trending/daily.json');
    return data;
  }
  async getAuthor(id: string) {
    const { data } = await axios.get(`/authors/${id}.json`);
    return data;
  }
}

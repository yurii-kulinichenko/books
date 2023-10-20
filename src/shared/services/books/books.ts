import axios from 'axios';

import { IBooksService } from '@shared/types/books/books';

axios.defaults.baseURL = 'https://www.zohoapis.com/books/v3';
axios.defaults.headers['X-API-Key'] = 'AIzaSyDZIIcpFd35OpdPJ5bxqgoG2je2DlP6pQ4';
const API_KEY = 'AIzaSyDt2lxB25FsUwirAsFzml67nog9_-Pvee0';

export class BooksService implements IBooksService {
  async getBooks() {
    const { data } = await axios.get('/invoices');
    return data;
  }
}

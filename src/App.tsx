import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '@shared/utils/routes';

import './App.css';
import { Author } from './pages/author';
import { BooksList } from './pages/books-list';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path={`/author/:id`} element={<Author />} />
      </Routes>
    </div>
  );
}

export default App;

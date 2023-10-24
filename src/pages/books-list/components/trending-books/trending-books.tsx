import { useMemo } from 'react';

import { Box } from '@mui/material';

import { BookCard } from '@shared/components/book-card';
import { Spinner } from '@shared/components/spinner';
import { appObserver } from '@shared/utils';

import { TrendingBooksViewModel } from './trending-books.vm';

const TrendingBooksComponent: React.FC = () => {
  const $vm = useMemo(() => new TrendingBooksViewModel(), []);

  return (
    <Box sx={{ height: '100%' }}>
      {$vm.loading && <Spinner />}
      {$vm.trendingBooks.map((book) => (
        <BookCard book={book} />
      ))}
    </Box>
  );
};

export const TrendingBooks = appObserver(TrendingBooksComponent);

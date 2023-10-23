import { useMemo } from 'react';

import { Box } from '@mui/material';
import { Card } from 'src/shared/components/card';
import { Spinner } from 'src/shared/components/spinner';
import { appObserver } from 'src/shared/utils/utils';

import { TrendingBooksViewModel } from './trending-books.vm';

const TrendingBooksComponent: React.FC = () => {
  const $vm = useMemo(() => new TrendingBooksViewModel(), []);

  return (
    <Box sx={{ height: '100%' }}>
      {$vm.loading && <Spinner />}
      {$vm.trendingBooks.map((book) => (
        <Card book={book} />
      ))}
    </Box>
  );
};

export const TrendingBooks = appObserver(TrendingBooksComponent);

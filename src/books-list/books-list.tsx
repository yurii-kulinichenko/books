import { Box } from '@mui/material';

import { TrendingBooks } from './components/trending-books';

export const BooksList: React.FC = () => {
  return (
    <Box sx={{ height: '100%' }}>
      <TrendingBooks />
    </Box>
  );
};

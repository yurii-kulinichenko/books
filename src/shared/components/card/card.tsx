import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { BASE_IMAGE_SRC } from 'src/shared/constants/constants';

type Props = {
  book: Record<string, string>;
};

export const Card: React.FC<Props> = ({ book }) => {
  return (
    <Box sx={{ display: 'flex', padding: '24px' }}>
      <img src={`${BASE_IMAGE_SRC}${book.cover_i}-M.jpg`} alt={`${book.title} cover`} />
      <Box sx={{ padding: '12px', textAlign: 'left' }}>
        <h3>{book.title}</h3>
        <Typography>Author: {book.author_name}</Typography>
      </Box>
    </Box>
  );
};

import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import appWithStyles from 'react-jss';
import { useNavigate } from 'react-router-dom';

import { BASE_IMAGE_SRC } from '@shared/constants/constants';
import { Book } from '@shared/models/book';
import { ROUTES } from '@shared/utils/routes';

import { useStyles } from './book-card.styles';

type Props = {
  book: Book;
};

const BookCardComponent: React.FC<Props> = ({ book }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleGoToAuthor = (id) => {
    navigate(ROUTES.author(id));
  };

  return (
    <Box className={classes.root}>
      <img src={`${BASE_IMAGE_SRC}${book.cover_i}-M.jpg`} alt={`${book.title} cover`} />
      <Box sx={{ padding: '12px', textAlign: 'left' }}>
        <h3>{book.title}</h3>
        <Typography>
          Author:{' '}
          {book.author_name.map((author, index) => (
            <Link
              onClick={() => handleGoToAuthor(book.author_key[index])}
              className={classes.authorLink}
            >
              {author}
            </Link>
          ))}
        </Typography>
        <Typography>{book.first_publish_year}</Typography>
        <Typography>Avaible languages: {book.language?.join(', ')}</Typography>
      </Box>
    </Box>
  );
};

export const BookCard = appWithStyles(useStyles)(BookCardComponent);

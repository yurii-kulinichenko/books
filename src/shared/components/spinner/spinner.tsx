import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

type Props = {};

export const Spinner: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <CircularProgress />
    </Box>
  );
};

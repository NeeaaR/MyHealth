import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function Cards() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', transition: 'all 0.3s',
        '&:hover': {
        transform: 'translateY(-5px)',
        cursor: 'pointer',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.19)' }, }}>
              <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://media.doctolib.com/image/upload/q_auto:eco,f_auto/cht0wj7zww5rfcvfmi0b.jpg"
        alt="Khun Pharmacy"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
            Pharmacie Khun
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Ouverture : Tous les jours de 7h à 23h
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            77600 - TORCY
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
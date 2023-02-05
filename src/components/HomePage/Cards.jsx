import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Section from './Section';


export default function Cards() {
  return (
    <Box elevation={2} sx={{ minWidth: 275 , marginLeft: '45px', marginRight: '45px', position: 'relative', top: '-50px'}}>
      <Card variant="outlined" sx={{ borderRadius: '10px'}}>
        <div data-aos="fade-up">
        <Section/>
        </div>
        <div data-aos="fade-up">
        <Section/>
        </div>
        <div data-aos="fade-up">
        <Section/>
        </div>
        <div data-aos="fade-up">
        <Section/>
        </div>
      </Card>
    </Box>
  );
}
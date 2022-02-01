import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

 // components

 export default function CardWelcome() {
   return (
     <>
      <Typography variant='subtitle1' align='center'>Welcome Susanna</Typography>
      <Box sx={{ marginTop: '1rem', marginBottom: '1rem', backgroundColor: '#E7E7EC', padding: '0.8em',
          margin: '0.5em -0.5em -0.5em -0.5em', borderBottomRightRadius: '0.75em', borderBottomLeftRadius: '0.75em' }}>
        <Typography variant='body2' align='center'>Company: Medicare Advantage</Typography>
        <Typography variant='body2' align='center'>Network Size: 150,000</Typography>
      </Box>
     </>
   );
 } 
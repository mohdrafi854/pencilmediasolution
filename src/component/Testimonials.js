import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Rating, Button } from '@mui/material';


const Testimonials = ({title, testimonials, btnText}) => {
  return (
    <Box sx={{ py: 8, bgcolor: '#0b1640', color: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" fontWeight="bold" sx={{ mb: 6 }}>
          {title}
        </Typography>

        <Grid container spacing={3}>
          {testimonials.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Card sx={{ 
                height: '100%', 
                background: 'linear-gradient(171deg, #BCD6E3 0%, rgba(244,244,244,0) 100%)', 
                color: 'white',
                p: 2,
                borderRadius: 2
              }}>
                <CardContent>
                  <Typography variant="h2" sx={{ opacity: 0.3, mb: 1 }}>“</Typography>
                  <Typography variant="body1" sx={{ mb: 2, minHeight: '150px' }}>{item.quote}</Typography>
                  <Rating value={5} readOnly sx={{ mb: 1, '& .MuiRating-iconFilled': { color: '#ffb400' } }} />
                  <Typography variant="h6" fontWeight="bold">{item.name}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>{item.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="contained" sx={{ bgcolor: 'white', color: 'black', borderRadius: 5, px: 4 }}>
            {btnText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
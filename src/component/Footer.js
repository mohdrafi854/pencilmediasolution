'use client';
import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#bcd6e3', color: '#0e194f', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* Get In Touch */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              GET IN TOUCH
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Location:</strong> Pencil Media Address GF 002, Pelt No.1, Sector 38 Gurgeon, 213076
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Phone:</strong> 7075553766
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> 
              <Link href="mailto:Marketing@pencilmediasolutions.com" color="inherit" underline="hover" sx={{ ml: 1 }}>
                Marketing@pencilmediasolutions.com
              </Link>
            </Typography>
          </Grid>

          {/* Stay Connected */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { md: 'right', xs: 'left' } }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              STAY CONNECTED
            </Typography>
            <Box>
              <IconButton color="inherit" component={Link} href="#">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" component={Link} href="#">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ mt: 8, pt: 3, borderTop: '1px solid #0e194f', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © 2022 | All Rights Reserved | Pensil Media Agencies - A Brand of Moon Enterprises
          </Typography>
          <IconButton 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            sx={{ bgcolor: 'white', color: '#0b1640', '&:hover': { bgcolor: 'grey.200' } }}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
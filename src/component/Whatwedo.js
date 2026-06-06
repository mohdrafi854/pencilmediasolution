import {
  AppBar,
  Container,
  Button,
  Grid,
  Stack,
  Paper,
  Box,
  Typography,
  List,
  ListItem,
  Toolbar,
} from "@mui/material";



const WhatWeDo = ({title, subTitle, services}) => {
  return (
    <Box sx={{ py: 8, bgcolor: "#0e194f", color: "white" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          {/* Left Side Text */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
             {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {subTitle}
            </Typography>
          </Grid>

          {/* Right Side Cards */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={2}>
              {services.map((service, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      border: "1px solid #e0e0e0",
                      borderRadius: 2,
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <Box sx={{ color: "#1976d2", mb: 1 }}>{service.icon}</Box>
                    <Typography variant="h6" fontWeight="bold">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.desc}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default WhatWeDo;

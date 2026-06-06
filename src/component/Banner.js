import { AppBar, Container, Button, Grid, Stack, Paper, Box, Typography, List, ListItem, Toolbar } from "@mui/material";
const Banner = ({title, subTitle, btnText}) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #BCD6E3 0%, #0E194F 100%)",
        minHeight: 533,
        width: "100%",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="/your-image-path.jpg" // Replace with your image
              alt="Digital Strategy"
              sx={{
                width: "100%",
                borderRadius: 2,
                display: "block",
              }}
            />
          </Grid>

          {/* Right Side: Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="bold"
              color="white"
              sx={{ color: "#fff" }}
            >
              {title}
            </Typography>
            <Typography variant="h6" sx={{ color: "#fff" }}>
              {subTitle}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                marginTop: "15px",
                padding: "9px 25px",
              }}
            >
             {btnText} 
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Banner;

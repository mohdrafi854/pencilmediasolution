import Link from "@mui/joy/Link";
import { AppBar, Container, Button, Grid, Stack, Paper } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItem, Toolbar } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import WebIcon from "@mui/icons-material/Web";
import SearchIcon from "@mui/icons-material/Search";
import ShareIcon from "@mui/icons-material/Share";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import ClientsSlider from "../component/Slider";
import Testimonials from "@/component/Testimonials";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";

export default function Home() {

  const services = [
    {
      title: "Digital Strategy",
      desc: "It’s all about the Positioning",
      icon: <AnalyticsIcon fontSize="large" />,
    },
    {
      title: "Website Design & Development",
      desc: "User Experience Above All",
      icon: <WebIcon fontSize="large" />,
    },
    {
      title: "SEO",
      desc: "Top of Search & Top of Mind",
      icon: <SearchIcon fontSize="large" />,
    },
    {
      title: "Social Media",
      desc: "On Trends Always Ahead",
      icon: <ShareIcon fontSize="large" />,
    },
    {
      title: "Content Marketing",
      desc: "Smart, Reliable, Agile",
      icon: <EditNoteIcon fontSize="large" />,
    },
    {
      title: "App Store Optimization (ASO)",
      desc: "Shape the Future, Be Discovered",
      icon: <AppShortcutIcon fontSize="large" />,
    },
  ];



  return (
    <main className="w-full">
      <Box
        sx={{ bgcolor: "#0e194f", py: 1, borderBottom: "1px solid #0e194f" }}
      >
        <Container maxWidth="lg">
          {/* Stack se right side alignment mil jayegi */}
          <Stack
            direction="row"
            spacing={3}
            sx={{ justifyContent: "flex-end" }}
          >
            {/* Phone Number */}
            <Link
              href="tel:+917678555796"
              underline="none"
              sx={{ color: "white" }}
            >
              <Stack direction="row" spacing={0.5}>
                <PhoneIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2">+91-7678555796</Typography>
              </Stack>
            </Link>

            {/* Email Address */}
            <Link
              href="mailto:marketing@pencilmediasolutions.com"
              underline="none"
              sx={{ color: "white" }}
            >
              <Stack direction="row" spacing={0.5}>
                <EmailIcon sx={{ fontSize: 16 }} />
                <Typography variant="body2">
                  marketing@pencilmediasolutions.com
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Container>
      </Box>

      <Navbar />

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
                color="white" sx={{color:"#fff"}}
              >
                Digital-First. <br /> Strategy-Led.
                <br /> Creatively Focused
              </Typography>
              <Typography variant="h6" sx={{color:"#fff"}}>
                We turn bold ideas into digital campaigns that do <br /> what
                they’re meant to — deliver results.
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: "white", color: "black", marginTop:"15px", padding:"9px 25px" }}
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 8, bgcolor: "#0e194f", color: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            {/* Left Side Text */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                What We Do!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We Craft Seamless Digital Experiences for Users Journey.
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

      <ClientsSlider />

      <Testimonials />
      <Footer />
    </main>
  );
}

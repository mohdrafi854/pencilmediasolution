"use client";
import { AppBar, Container, Button, Grid, Stack, Paper, Box, Typography, List, ListItem, Toolbar, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Topbar = ({mobile, email}) => {
  return (
    <Box sx={{ bgcolor: "#0e194f", py: 1, borderBottom: "1px solid #0e194f" }}>
      <Container maxWidth="lg">
        
        <Stack direction="row" spacing={3} sx={{ justifyContent: "flex-end" }}>
         
          <Link
            href="tel:+91{mobile}"
            underline="none"
            sx={{ color: "white" }}
          >
            <Stack direction="row" spacing={0.5}>
              <PhoneIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2">+91-{mobile}</Typography>
            </Stack>
          </Link>

          
          <Link
            href={email}
            underline="none"
            sx={{ color: "white" }}
          >
            <Stack direction="row" spacing={0.5}>
              <EmailIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2">
                {email}
              </Typography>
            </Stack>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};
export default Topbar;

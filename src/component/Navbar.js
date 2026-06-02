"use client";
import { useState } from "react";
import {
  AppBar,
  Container,
  Button,
  Grid,
  Stack,
  Paper,
  Link,
} from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { ListItem, Toolbar } from "@mui/material";
const Navbar = () => {
  const logo =
    "https://pencilmediasolutions.com/wp-content/uploads/2025/05/pencilmedia-logo-removebg-preview.png";
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/",
    },
    {
      label: "Services",
      href: "/",
    },
    {
      label: "Careers",
      href: "/",
    },
    {
      label: "Contact Us",
      href: "/",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        backgroundColor: "#bcd6e3",
        boxShadow: "none",
        position: "static",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", p:0 }}>
          {/* Left Side: Logo */}
          <Typography>
            <img
              src={logo}
              alt="Pencil Media Solutions"
              title="Pencil Media Solutions"
              width={187}
            />
          </Typography>

          {/* Right Side: Navbar */}
          <Box sx={{ display: "flex" }}>
            <List sx={{ display: "flex", gap: 0 }}>
              {links.map((link, i) =>
                link.label === "Our Services" ? (
                  <ListItem key={i} sx={{ p: 0 }}>
                    <Button
                      onMouseEnter={handleOpen}
                      onMouseLeave={handleClose}
                      endIcon={<KeyboardArrowDownIcon />}
                      sx={{
                        color: "#0E194F",
                        textTransform: "none",
                        fontSize: "16px",
                      }}
                    >
                      {link.label}
                    </Button>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                      <MenuItem onClick={handleClose}>
                        Digital Strategy
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        Website Development
                      </MenuItem>
                      <MenuItem onClick={handleClose}>SEO</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Social Media Management
                      </MenuItem>
                    </Menu>
                  </ListItem>
                ) : (
                  <ListItem key={i}>
                    <Link
                      href={link.href}
                      sx={{
                        color: "#0E194F",
                        textDecoration: "none",
                        fontSize: "16px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {link.label}
                    </Link>
                  </ListItem>
                ),
              )}
            </List>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

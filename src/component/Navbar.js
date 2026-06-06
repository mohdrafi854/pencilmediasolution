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
import { List } from "@mui/material";
import { ListItem, Toolbar } from "@mui/material";
import Image from "next/image";
const Navbar = ({logo, links}) => {


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
          <Box>
            <Image src={logo} alt="Pencil Media Solutions"
              title="Pencil Media Solutions"
              width={188} height={60}/>
          </Box>

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

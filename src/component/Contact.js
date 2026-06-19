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
  ListItemText,
} from "@mui/material";

import ContactForm from "./ContactForm";

const Contact = ({ data }) => {
  const { title, para, contactDetails, paraSecond } = data;
  return (
    <Container maxWidth="lg">
      <Box sx={{margin: {lg: "50px 0", xs: "20px 0"}}}>
        <Grid container space={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4">{title}</Typography>
            {para}
            <List>
              {contactDetails.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={item.heading}
                    secondary={item.email}
                    
                  />
                </ListItem>
              ))}
            </List>
            {paraSecond}
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;

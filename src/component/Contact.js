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

const Contact = ({ data }) => {
  const { title, para, contactDetails, paraSecond } = data;
  return (
    <Container maxWidth="lg">
      <Box>
        <Grid container space={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3">{title}</Typography>
            {para}
            <List>
              {contactDetails.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={item.heading}
                    secondary={item.email}
                    secondaryTypographyProps={{ variant: "h6" }}
                  />
                </ListItem>
              ))}
            </List>
            {paraSecond}
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}></Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;

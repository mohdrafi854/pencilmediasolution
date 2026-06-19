"use client"
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";

const styles = {
  button: {
    marginTop: "20px",
    padding: "12px",
    textTransform: "none",
    fontSize: "16px",
  }
};
const ContactForm = () => {
  const { register } = useForm();
  return (
    <Container maxWidth={false} sx={{maxWidth:{lg:"lg"}, px:{xs:"0"}}}>
      <form>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          {...register("name")}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          {...register("email")}
        />
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          {...register("phone")}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
          {...register("name")}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          sx={styles.button}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};
export default ContactForm;

"use client"

import { useForm } from "react-hook-form";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

const styles = {
    button:{
        marginTop:"20px",
        padding:"12px",
        textTransform:"none",
        fontSize:"16px"
    }
}

const CareerForm = () => {
    const {register} = useForm()
  return (
    <Container maxWidth="sm" sx={{ marginTop: "50px" }}>
      <Paper elevation={3} sx={{ padding: "40px", borderRadius: "12px" }}>
        <Typography
          variant="4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Ready to take the next step in your career? Share your info and we’ll
          match you with suitable openings!
        </Typography>
        <form noValidate>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            {...register("name")}
          />
          <TextField
            label="Email"
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
            label="Year of Experience"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            {...register("experience")}
          />
          <TextField
            label="Skill"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("skill")}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
            {...register("message")}
          />
          <Button type="submit" variant="contained" color="primary" size="small" sx={styles.button}>Submit</Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CareerForm;

import { Padding } from "@mui/icons-material";
import { Typography, Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import CareerForm from "./CareerForm";

function Careers({ title, para, imageUrl }) {
    const styles = {
        topBottom : {
            padding:"50px 0",

        },
        center:{
          justifyContent:"center", 
          alignItems:"center"
        }
    }
  return (
    <Container maxWidth="lg" sx={styles.topBottom}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} direction="row" sx={[styles.topBottom, styles.center]}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h1">{title}</Typography>
            {para.map((text, index) => {
              return <Typography key={index} sx={{marginTop:"30px"}}>{text}</Typography>;
            })}
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Image
              src={imageUrl}
              alt="Careers"
              width={500}
              height={500}
            />
          </Grid>
        </Grid>
      </Box>
      <CareerForm />
    </Container>
  );
}

export default Careers;

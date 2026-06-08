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
} from "@mui/material";
import Image from "next/image";
import { AboutData } from "@/constants";

const styles = {
    topSpace : {
        margin: "30px 0 0 0"
    }
}

export default function About() {
  return (
    <Container maxWidth="lg">
    <Box sx={styles.topSpace}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Paper sx={{ p:{xs:0, md: 2}, textAlign: "left", boxShadow:"0" }}>
            <Typography variant="h2">
                {AboutData.TITLE}
            </Typography>
            {
                AboutData.DESC.map((para, index) => <Typography key={index} sx={{margin:"15px 0"}}>{para}</Typography>)
            }
            
          </Paper>
        </Grid>

        
        <Grid size={{ xs: 12, md: 5 }}>
            <Image src="/images/Screenshot_1.png" alt="image" width={500} height={500} style={{objectFit:"cover"}} />
        </Grid>
      </Grid>
    </Box>

    </Container>
  );
}

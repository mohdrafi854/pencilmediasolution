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
import Contact from "@/component/Contact";
import { ContactData } from "@/constants";

const Contactus = () => {
    return(
        <Contact data={ContactData}  />
    )
}

export default Contactus
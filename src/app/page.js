import Link from "@mui/joy/Link";
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



import ClientsSlider from "../component/Slider";
import Testimonials from "@/component/Testimonials";



import Banner from "@/component/Banner";
import WhatWeDo from "@/component/Whatwedo";

import { BANNER } from "@/constants";
import { WHAT_WE_DO } from "@/constants";
import { LOGO_IMAGES, TESTIMONIALS } from "@/constants";


export default function Home() {


  return (
    <main className="w-full">
      
      
      <Banner title={BANNER.TITLE} subTitle={BANNER.SUB_TITLE} btnText={BANNER.BUTTON_TEXT} />
      <WhatWeDo title={WHAT_WE_DO.TITLE} subTitle={WHAT_WE_DO.SUB_TITLE} services={WHAT_WE_DO.SERVICES} />

      <ClientsSlider title={LOGO_IMAGES.TITLE} clientsLogo={LOGO_IMAGES.CLIENTS} />

      <Testimonials title={TESTIMONIALS.TITLE} testimonials={TESTIMONIALS.TESTIMONIAL} btnText={TESTIMONIALS.BUTTON_TEXT} />
      _
    </main>
  );
}

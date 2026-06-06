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
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Topbar from "../component/Topbar";
import Banner from "@/component/Banner";
import WhatWeDo from "@/component/Whatwedo";

import { BANNER } from "@/constants";
import { TOP_HEADER } from "@/constants";
import { WHAT_WE_DO } from "@/constants";
import { NAVBAR } from "@/constants";
import { LOGO_IMAGES, TESTIMONIALS, FOOTER } from "@/constants";


export default function Home() {


  return (
    <main className="w-full">
      <Topbar mobile={TOP_HEADER.MOBILE} email={TOP_HEADER.EMAIL} />
      <Navbar logo={NAVBAR.LOGO} links={NAVBAR.LINKS} />
      <Banner title={BANNER.TITLE} subTitle={BANNER.SUB_TITLE} btnText={BANNER.BUTTON_TEXT} />
      <WhatWeDo title={WHAT_WE_DO.TITLE} subTitle={WHAT_WE_DO.SUB_TITLE} services={WHAT_WE_DO.SERVICES} />

      <ClientsSlider title={LOGO_IMAGES.TITLE} clientsLogo={LOGO_IMAGES.CLIENTS} />

      <Testimonials title={TESTIMONIALS.TITLE} testimonials={TESTIMONIALS.TESTIMONIAL} btnText={TESTIMONIALS.BUTTON_TEXT} />
      <Footer title={FOOTER.TITLE} location={FOOTER.ADDRESS} phone={FOOTER.PHONE} email={FOOTER.EMAIL} titleSecond={FOOTER.TITLE_SECOND} copyRight={FOOTER.COPYRIGHT} />
    </main>
  );
}

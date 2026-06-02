"use client"; // Ye top par hona zaruri hai

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Box, Container, Typography, Paper } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 2. Slider ko dynamic load karein (SSR: false)
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

const ClientsSlider = () => {
  // Aapka settings aur render code yahan rahega...
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 5,
    // ... baaki settings
  };

  const clients = [
    { src: "/images/1n-1.png" },
    { src: "/images/2n-1.png" },
    { src: "/images/3n.png" },
    { src: "/images/5n.png" },
    { src: "/images/fast-n-fresh.jpg" },
    { src: "/images/Screenshot_1-2.png" },
    { src: "/images/Screenshot_1-3.png" },
    { src: "/images/Screenshot_4-1.png" },
    { src: "/images/Screenshot_5.png" },
    { src: "/images/ssss.png" },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ mb: 6 }}
        >
          Client Who Trusted Us
        </Typography>

        <Slider {...settings}>
          {clients.map((client, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <Paper
                elevation={0}
                sx={{ p: 4, textAlign: "center", border: "1px solid #eee", backgroundColor:"#bcd6e3" }}
              >
                <Image src={client.src} alt="Logo" width={231} height={132} />
              </Paper>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default ClientsSlider;

import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Grid, Typography } from "@mui/material";

const images = [
  {
    id: 1,
    promo: "Bulan Ramadhan banyak diskon!",
    diskon: "60%",
    img: "images/heroo.png",
    color: "#FFE9CA",
  },
  {
    id: 2,
    promo: "Bulan Ramadhan banyak voucher!",
    diskon: "70%",
    img: "images/herosungu.png",
    color: "#E2D4F0",
  },
  {
    id: 3,
    promo: "Bulan Ramadhan banyak pahala!",
    diskon: "80%",
    img: "images/herohijau.png",
    color: "#B6D4A8",
  },
];

const HeroM = () => {
  const [imageIndex, setImageIndex] = useState(0);

  //   settings carousel
  const settings = {
    className: "center",
    lazyload: "true",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    focusOnSelect: true,
    variableWidth: true,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="carousel" style={{ overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className="herom" key={img.id}>
            <div
              className={idx === imageIndex ? "slideM activeSlideM" : "slideM"}
            >
              <div
                className="hero"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  marginTop: 10,
                }}
              >
                <Box
                  style={{
                    width: "87%",
                  }}
                >
                  {/* nama promo */}
                  <Grid
                    item
                    xs
                    style={{
                      display: "flex",
                      fontWeight: "700",
                      fontSize: "20px",
                      maxWidth: "300px",
                    }}
                  >
                    {img.promo}
                  </Grid>
                  {/* Gift box */}
                  <Box
                    sx={{
                      background: "transparant",
                      position: "absolute",
                      left: 176,
                      top: 10,
                    }}
                  >
                    <img src="/images/GiftM.png" alt="" />
                  </Box>
                  {/* Diskon hingga */}
                  <Typography variant="subtitle1" fontSize="14px" mt="8px">
                    Diskon Hingga
                  </Typography>
                  {/* Nominal diskon */}
                  <Typography
                    variant="subtitle1"
                    fontSize="32px"
                    color="#FA2C5A"
                  >
                    {img.diskon}
                  </Typography>
                </Box>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroM;

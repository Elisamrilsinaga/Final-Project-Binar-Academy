import { useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

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
    promo: "Ada SALE di Bulan Juni!",
    diskon: "70%",
    img: "images/herosungu.png",
    color: "#E2D4F0",
  },
  {
    id: 3,
    promo: "Ada Cashback hari ini!",
    diskon: "80%",
    img: "images/herohijau.png",
    color: "#B6D4A8",
  },
];

const Carousel = () => {
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
      <Slider {...settings} style={{
        display: "flex",
        flexWrap: 'nowrap'
      }}>
        {images.map((img, idx) => (
          <div key={img.id}>
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <div
                className="hero"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  marginTop: 30
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    borderRadius: "20px",
                    background: img.color,
                    
                  }}
                >
                  <Box
                    sx={{ flexGrow: 1 }}
                    style={{
                      maxWidth: "800px",
                      width: "80%",
                      padding: "10px",
                      margin: "auto",
                    }}
                  >
                    <Typography
                      sx={{
                        background: "transparant",
                        position: "absolute",
                        right: 300,
                        bottom: 60,
                        textAlign: "center",
                      }}
                    >
                      <img src="/images/Gift.png" alt="" />
                    </Typography>
                    <CardContent
                      sx={{
                        flex: "1 0 auto",
                        marginLeft: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <Grid
                        item
                        xs
                        style={{
                          display: "flex",
                          fontWeight: "700",
                          fontSize: "36px",
                          maxWidth: "400px",
                        }}
                      >
                        {img.promo}
                      </Grid>
                      <Typography variant="subtitle1" fontSize="14px" mt="8px">
                        Diskon Hingga
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontSize="32px"
                        color="#FA2C5A"
                      >
                        {img.diskon}
                      </Typography>
                    </CardContent>
                  </Box>

                  <CardMedia
                    component="img"
                    sx={{
                      width: 400,
                      background:
                        "linear-gradient(90deg, #FFE9CA 0%, rgba(255, 233, 202, 0) 100%)",
                    }}
                    image={img.img}
                    alt="gift bulan ramadhan"
                  />
                </Card>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

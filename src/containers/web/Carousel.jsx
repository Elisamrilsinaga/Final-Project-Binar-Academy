import { useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
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
  const isMobile = useMediaQuery("(max-width:600px)");
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
    variableWidth : !isMobile,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <Box className="carousel" style={{ overflow: "hidden",marginTop: 30, }} position="relative"
    sx={{
      marginBottom: {xs:"-50px",md:0}              
    }}
    >
      <Slider {...settings} >
        {images.map((img, idx) => (
          <div key={img.id} style="max-width:60%" className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <Card
                  sx={{
                    height: {md:"300px"},
                    py: {xs: "60px",md:0},
                    maxWidth: {xs:"100%",md:"1000px"},
                    display: "flex",
                    // justifyContent: "start",
                    borderRadius: {xs: 0,md:"20px"},
                    borderBottom: {xs: "none"},
                    background: {xs : "linear-gradient(180deg, "+img.color+" 80%, rgba(255, 233, 202, 0) 100%)", md:img.color},    
                    // width: "40%",
                  }}
                >
                  <Box
                    sx={{ flexGrow: 1,paddingLeft: {xs: "0",md:"80px"}, }}
                    style={{
                      zIndex: 2,
                      height: {md:"300px"},
                      display: "flex",
                      // justifyContent: "start",
                      alignItems: "center",  
                      flexDirection: "row-reverse",
                      // background: "#AAAAAA"
                    }}
                  >
                    <Typography
                      sx={{
                        // background: "transparant",
                        // position: "absolute",
                        // right: "50%",
                        // bottom: "10%",
                        // mr:{
                        //   xs : "0",
                        //   md: "-100px"
                        // },
                        // textAlign: "center",
                        mt: "50px",
                        pr: "20px"
                      }}
                    >
                      <img src="/images/Gift.png" alt="" />
                    </Typography>
                    <CardContent
                      
                      sx={{
                        width:"80%",
                        paddingRight: 0,
                        // flex: "1 0 auto",
                        // marginLeft: "10px",
                        marginTop: "10px",
                        // background: "red"
                      }}
                    >
                      <Grid
                        item
                        sx={{
                          display: "flex",
                          fontWeight: "700",
                          fontSize: {xs: "20px",md:"36px"},
                          // maxWidth: "400px",
                        }}
                      >
                        {img.promo}
                      </Grid>
                      <Typography variant="subtitle1" fontSize={{xs: "10px",md:"14px"}} mt="8px">
                        Diskon Hingga
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontSize={{xs: "18px",md:"32px"}}
                        color="#FA2C5A"
                      >
                        {img.diskon}
                      </Typography>
                    </CardContent>
                  </Box>

                  <Box sx={{display: {
                        xs : "none",
                        md: "block"
                      },
                      width:"50%",
                      marginLeft: "-200px"
                    }}
                  >
                  <CardMedia
                    component="img"
                    sx={{
                      height: {md:"300px"},
                      background:
                      "linear-gradient(90deg, #FFE9CA 0%, rgba(255, 233, 202, 0) 100%)",
                    }}
                    image={img.img}
                    alt="gift bulan ramadhan"
                  />
                      </Box>
                </Card>
            </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;

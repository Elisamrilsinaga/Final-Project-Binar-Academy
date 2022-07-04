import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductItem } from "../../redux/product";
import { useParams } from "react-router-dom";

const ImageSlider = () => {
  const { id } = useParams();
  const img = useSelector((state) => state.product.img);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductItem(id));
  }, [dispatch, id]);

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      {img.map((image) => {
        return (
          <SwiperSlide key={image.id}>
            <img
              src={`https://dev-second-hand.herokuapp.com/${image.picture}`}
              alt="gambar product"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageSlider;

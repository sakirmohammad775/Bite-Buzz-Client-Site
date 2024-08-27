import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Slide1 from "../../../assets/home/slide1.jpg"
import Slide2 from "../../../assets/home/slide2.jpg"
import Slide3 from "../../../assets/home/slide3.jpg"
import Slide4 from "../../../assets/home/slide4.jpg"
import Slide5 from "../../../assets/home/slide5.jpg"
const Category = () => {
    return (
        <>
      <section>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Slide1} alt="" /><h3 className='text-4xl uppercase text-center text-white -mt-12'>Salads</h3></SwiperSlide>
        <SwiperSlide><img src={Slide2} alt="" /><h3 className='text-4xl uppercase text-center text-white -mt-12'>Pizzas</h3></SwiperSlide>
        <SwiperSlide><img src={Slide3} alt="" /><h3 className='text-4xl uppercase text-center text-white -mt-12'>Soups</h3></SwiperSlide>
        <SwiperSlide><img src={Slide4} alt="" /><h3 className='text-4xl uppercase text-center text-white -mt-12'>Desserts</h3></SwiperSlide>
        <SwiperSlide><img src={Slide5} alt="" /><h3 className='text-4xl uppercase text-center text-white -mt-12'>Fruits</h3></SwiperSlide>
      
      </Swiper>
      </section>
      <h3></h3>
    </>
    );
};

export default Category;
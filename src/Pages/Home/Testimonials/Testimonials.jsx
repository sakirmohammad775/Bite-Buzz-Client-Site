

const Testimonials = () => {
    return (
        <>
         <section>
        <SectionTitle heading={"Order Online"} subHeading={"From 11.00am to 10.00pm"}></SectionTitle>
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
        </>
    );
};

export default Testimonials;
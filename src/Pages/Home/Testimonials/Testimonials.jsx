import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    },[])
    return (
        <><Swiper navigation={true} modules={[Navigation]} className="mySwiper">

            {reviews.map(review =>
                <SwiperSlide key={review._id}>

                    <div>
                        <p>{review.details}
                        </p>
                    </div>
                </SwiperSlide>)}



        </Swiper>
        </>
    );
};

export default Testimonials;
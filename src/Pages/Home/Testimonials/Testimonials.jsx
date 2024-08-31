import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(0)
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <><Swiper navigation={true} modules={[Navigation]} className="mySwiper">

            {reviews.map(review =>
                <SwiperSlide key={review._id}>

                    <div>
                        <p>{review.details}</p>
                        <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                        <Rating
                            style={{ maxWidth: 250 }}
                            value={rating}
                            onChange={setRating} />
                    </div>
                </SwiperSlide>)}



        </Swiper>
        </>
    );
};

export default Testimonials;
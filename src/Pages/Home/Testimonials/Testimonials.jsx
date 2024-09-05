import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(0)
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <SectionTitle heading={'testimonials'} subHeading={'What Our Clients Say'}></SectionTitle><Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {reviews.map(review =>
                    <SwiperSlide key={review._id}>

                        <div className='flex flex-col items-center mx-24 my-16'>
                            <Rating style={{ maxWidth: 250 }}
                                value={review.rating}
                                readOnly />
                            <p className='m'>{review.details}</p>
                            <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                        </div>
<h3>Hello</h3>

                    </SwiperSlide>)}



            </Swiper>
        </>
    );
};

export default Testimonials;
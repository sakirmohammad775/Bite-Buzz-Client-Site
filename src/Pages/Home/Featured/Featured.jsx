import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white my-10 ">
            <SectionTitle heading={'Featured item'} subHeading={'check it out'}></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p>Where can i get some?</p>
                    <p>Food transcends boundaries, uniting people through shared experiences and diverse flavors. It is a celebration of culture, tradition, and creativity, nourishing both body and spirit. From comforting home-cooked meals to gourmet delicacies, food tells stories, evokes emotions, and fosters connections, making every bite a journey of discovery and delight.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-5 text-white'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
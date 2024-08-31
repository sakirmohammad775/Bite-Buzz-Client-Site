import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
const Featured = () => {
    return (
        <div>
            <SectionTitle heading={'Featured item'} subHeading={'check it out'}></SectionTitle>
            <div className='md:flex justify-center items-center py-8 px-16'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p>Where can i get some?</p>
                    <p>Food transcends boundaries, uniting people through shared experiences and diverse flavors. It is a celebration of culture, tradition, and creativity, nourishing both body and spirit. From comforting home-cooked meals to gourmet delicacies, food tells stories, evokes emotions, and fosters connections, making every bite a journey of discovery and delight.</p>
                    <button className='btn btn-outline'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
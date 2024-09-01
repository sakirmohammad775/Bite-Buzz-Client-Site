import React from 'react';
import Banner from './Banner/Banner';
import PopularMenu from "../../Pages/Home/PopularMenu/PopularMenu"
import Featured from "../../Pages/Home/Featured/Featured"
import Category from "../../Pages/Home/Category/Category"
import Testimonials from './Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <>
        <Helmet>
            <title>BiteBuzz | Home</title>
        </Helmet>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonials></Testimonials>
        </>
    );
};

export default Home;
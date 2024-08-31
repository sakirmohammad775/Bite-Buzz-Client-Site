import React from 'react';
import Banner from './Banner/Banner';
import PopularMenu from "../../Pages/Home/PopularMenu/PopularMenu"
import Featured from "../../Pages/Home/Featured/Featured"
import Category from "../../Pages/Home/Category/Category"
const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        </>
    );
};

export default Home;
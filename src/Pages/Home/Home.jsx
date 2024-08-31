

import Banner from "./Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";


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
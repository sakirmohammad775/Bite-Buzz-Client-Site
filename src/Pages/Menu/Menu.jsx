import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import MenuImg from "../../assets/menu/banner3.jpg"
import PopularMenu from "../Home/PopularMenu/PopularMenu";

//for dynamic page title change using react helmet
const Menu = () => {
    return (
        <>
        <Helmet>
            <title>BiteBuzz | Menu</title>
        </Helmet>
        <Cover img={MenuImg} title={'Our Menu'}></Cover>
        <PopularMenu></PopularMenu>
        </>
    );
};

export default Menu;
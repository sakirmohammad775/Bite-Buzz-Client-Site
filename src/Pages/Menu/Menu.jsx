import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import MenuImg from "../../assets/menu/banner3.jpg"
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import UseMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";

//for dynamic page title change using react helmet
const Menu = () => {
    const [menu] = UseMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <>
            <Helmet>
                <title>BiteBuzz | Menu</title>
            </Helmet>
            <Cover img={MenuImg} title={'Our Menu'}></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={dessert}></MenuCategory>
        </>
    );
};

export default Menu;
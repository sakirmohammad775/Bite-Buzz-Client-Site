import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import UseMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";
import MenuImg from "../../assets/menu/banner3.jpg"
import DessertImg from "../../assets/menu/dessert-bg.jpeg"
import SoupImg from "../../assets/menu/soup-bg.jpg"
import SaladImg from "../../assets/menu/salad-bg.jpg"
import PizzaImg from "../../assets/menu/pizza-bg.jpg"

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

        {/* main cover */}
            <Cover img={MenuImg} title={'Our Menu'}></Cover>
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>

            {/* offered menu items */}
            <MenuCategory items={dessert} title={"Dessert"} img={DessertImg} ></MenuCategory>
        </>
    );
};

export default Menu;
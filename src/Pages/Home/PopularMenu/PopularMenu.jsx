
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";
import MenuCategory from "../../Shared/MenuCategory/MenuCategory";


const PopularMenu = () => {
    const [menu] = UseMenu()
    const popularMenu = menu.filter(item => item.category === 'popular')
    
    return (
        <>
            <SectionTitle heading='From our menu' subHeading="Popular Items"></SectionTitle>
            <MenuCategory items={popularMenu}></MenuCategory>
            
        </>
    );
};

export default PopularMenu;
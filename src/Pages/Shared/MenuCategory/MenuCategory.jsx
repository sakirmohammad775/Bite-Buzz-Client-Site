import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";


const MenuCategory = ({items,title,img}) => {
    return (
        <>
        {title && <Cover
            img={img} title={title}></Cover>}
        <div className="grid md:grid-cols-2 gap-10 my-8">
                {
                    items.map(item => <MenuItem
                        key={item}
                        item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><button className='btn btn-outline border-0 text-xl border-b-4 mt-5 text-white'>Order Your Favourite Food</button></Link>
        </>
    );
};

export default MenuCategory;
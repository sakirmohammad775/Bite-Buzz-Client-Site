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
        </>
    );
};

export default MenuCategory;
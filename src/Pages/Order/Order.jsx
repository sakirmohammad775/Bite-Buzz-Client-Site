import CoverImg from "../../assets/shop/banner2.jpg"
import Cover from "../Shared/Cover/Cover"
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";
import UseMenu from "../../Hooks/UseMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
const Order = () => {
    const [tabIndex,setTabIndex]=useState(0)
    const [menu] = UseMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <>
            <Cover img={CoverImg} title={"OUR SHOP"}></Cover>
            <Tabs className="text-center items-center" defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(Index)}>
                <TabList>
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
                {
                    salad.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                    }
                </div>
                     </TabPanel>
                <TabPanel> </TabPanel>
                <TabPanel> </TabPanel>
                <TabPanel> </TabPanel>
                <TabPanel> </TabPanel>
                
            </Tabs>
        </>
    );
};

export default Order;
import CoverImg from "../../assets/shop/banner2.jpg"
import Cover from "../Shared/Cover/Cover"
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";
const Order = () => {
    const [tabIndex,setTabIndex]=useState(0)
    return (
        <>
            <Cover img={CoverImg} title={"OUR SHOP"}></Cover>
            <Tabs defaultIndex={1} onSelect={(index)}>
                <TabList>
                    <Tab>Pizza</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default Order;
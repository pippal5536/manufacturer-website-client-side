import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Tools from './Tools';
import Footer from './../../Shared/Footer';
import DarkMode from './DarkMode';
import ContactUs from './ContactUs';


const Home = ({darkMode, setDarkMode}) => {
    return (
        <div >
            This is Home page
           
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <DarkMode   darkMode={darkMode} setDarkMode={setDarkMode}> </DarkMode>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
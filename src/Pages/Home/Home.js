import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Tools from './Tools';
import Footer from './../../Shared/Footer';
import DarkMode from './DarkMode';
import ContactUs from './ContactUs';
import Reviews from './Reviews';


const Home = ({darkMode, setDarkMode}) => {
    return (
        <div >
           
           
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <DarkMode   darkMode={darkMode} setDarkMode={setDarkMode}> </DarkMode>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
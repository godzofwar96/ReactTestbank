import React, { useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import ImageLoading from '../Ultils/ImageLoading';
import Master from '../layouts/master_layout';
import SearchBar from '../components/SearchBar';
import Banner from '../components/Banner';
import NavigationBar from '../components/NavigationBar';
import { useMediaQuery } from 'react-responsive';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home = () => {
    const isNotWindow = useMediaQuery({ minWidth: 1045 })

    return (
        <>
            <SearchBar />
            <NavigationBar />
            {
                isNotWindow &&
                <Banner />
            }
            <Master>
                <ImageLoading notMobile="342px" desktop="409px" mobile="188px" tablet="254px" smallSrc="https://i0.wp.com/s1.uphinh.org/2020/09/26/kent.jpg" largeSrc="https://i0.wp.com/s1.uphinh.org/2020/09/26/kent.jpg" />
            </Master>
            <Contact />
            <Footer />
        </>
    )
}

export default Home

import React, { useState } from 'react'
import { Jumbotron as Jumbo, Container, Image, Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbotron {
        color: #efefef;
        padding: 0;
    }

    .overlay {
        background-color: #f3f3f3;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`;

const Jumbotron = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Styles>
            <>
                <style type="text/css">
                    {`
                        .banner-img {
                            height: 354px;
                        }
                        @media only screen and (max-width: 600px) {
                            .banner-img {
                                height: 240px
                            }
                        }
                        @media only screen and (max-width: 420px) {
                            .banner-img {
                                height: 145px
                            }
                        }
                    `}
                </style>
            </>
            <Jumbo fluid className="jumbo">
                <div className="overlay">
                <Carousel interval={3000} activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <Image className="d-block w-100 banner-img" alt="First slide" src='https://i0.wp.com/s1.uphinh.org/2020/09/21/banner.jpg' fluid />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="d-block w-100 banner-img" alt="Second slide" src='https://i0.wp.com/s1.uphinh.org/2020/09/26/kent.jpg' fluid />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="d-block w-100 banner-img" alt="Third slide" src='https://i0.wp.com/s1.uphinh.org/2020/09/21/banner.jpg' fluid />
                    </Carousel.Item>
                    </Carousel>
                </div>
            </Jumbo>
        </Styles>
    )
}

export default Jumbotron

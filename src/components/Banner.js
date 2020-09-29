import React,{ useState } from 'react'
import { Carousel, Image, Row, Col, Card } from 'react-bootstrap'
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import clsx from "clsx";

const Styles = styled.div`
    .carousel img {
        border-radius: 20px;
    }
    .col-xs-12 {
        margin-bottom: 10px;
    }
    .bg-dark {
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
    .banner-content img {
        opacity: 0.1;
        border-radius: 20px;
    }
    .banner-img {
        height: 336px;
    }
    a:visited, a:hover, a:link {
        text-decoration: none;
        cursor: pointer;
    }
`;

const Banner = () => {
    const isWindow = useMediaQuery({ maxWidth: 1200 })
    const bannerContent = clsx("d-block", isWindow && "banner-img")
    const bannerText = isWindow ? "h6" : "h5";
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Styles>
            <Row className="m-0 pl-3 pr-3">
                <Col xs={12} lg={6} className="p-3" >
                    <Carousel interval={3000} activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <Image className="d-block w-100 banner-img" alt="First slide" src='https://testbank.vn/libs/images/banner-dethi.jpg' fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="d-block w-100 banner-img" alt="Second slide" src='https://testbank.vn/libs/images/banner-dethi.jpg' fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className="d-block w-100 banner-img" alt="Third slide" src='https://testbank.vn/libs/images/banner-dethi.jpg' fluid />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={12} lg={6} className="banner p-3">
                    <div className="banner-content bg-dark">
                        <Image src="https://cdnmedia.thethaovanhoa.vn/2016/09/08/16/10/thitotnghiep.jpg"  className={bannerContent} fluid/>
                        <Card.ImgOverlay className="text-center mt-2 text-white p-5">
                            <Card.Title className="mb-4">
                                <p className="h4">Các đề được các thành viên luyện nhiều nhất</p>
                            </Card.Title>
                            <Card.Text>
                                <a className="text-white" href="#"><p className={bannerText}>Đề thi chính thức tỉnh Quảng Ngãi năm 2019 môn Kiến ...</p></a>
                                <a className="text-white" href="#"><p className={bannerText}>Đề thi thử môn Anh Văn 2019- Đề 1 -Ôn thi giáo ...</p></a>
                                <a className="text-white" href="#"><p className={bannerText}>TUẦN 3 KHỐI 12 ĐỊA LÍ CÔ THƯƠNG BỈNH SƠN</p></a>
                                <a className="text-white" href="#"><p className={bannerText}>ĐỀ ÔN TẬP ĐỊA LÍ 10 HK2 BÀI 31 VÀ 32</p></a>
                                <a className="text-white" href="#"><p className={bannerText}>99 CÂU TRẮC NGHIỆM LUẬT GIÁO DỤC NGHỀ NGHIỆP</p></a>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </div>
                </Col>
            </Row>
        </Styles>
    )
}

export default Banner

import React from 'react'
import { Row, Image, Button, Container, Col, Dropdown, Badge} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    padding: 50px;
    margin-top: 20px;
    .h3 {
        font-size: 30px;
        text-align: center;
        color: #626262;
        font-weight: bold;
    }
    .clearFix {
        margin-left: 20px;
        color: #626262;
    }
    .contact {
        display: flex;
    }
    .contact-top {
        justify-content: space-between;
    }
    .map-add {
        height: 56px;
        width: 56px;
    }
    .map-email {
        height: 53px;
        width: 57px;
    }
    .map-phone {
        height: 56px;
        width: 56px;
    }
    
`;

const Contact = () => {
    return (
        <Styles className="non-background text-center">
            <p className="h3">
                Contact
            </p>
            <Row className="m-1 pt-5 contact-top">
                <Col xs={12} md={3}>
                    <div className="contact m-0">
                        <Image src="https://testbank.vn/libs/images/map-add.png" className="map-add contact-img" />
                        <div className="clearFix">
                            <p className="h4">Địa chỉ</p>
                            <p className="text-justify">
                                Tầng 9, Tòa nhà Zodiac - Số 1 Ngõ 19 Duy Tân, phường Dịch Vọng Hậu, quận Cầu Giấy, Hà Nội.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className="contact m-0">
                        <Image src="https://testbank.vn/libs/images/map-email.png" className="map-email contact-img" />
                        <div class="clearFix">
                            <p className="h4">Email</p>
                            <p className="text-justify">lienhe@testbank.vn</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className="contact m-0">
                        <Image src="https://testbank.vn/libs/images/map-email.png" className="map-email contact-img" />
                        <div class="clearFix">
                            <p className="h4">Phone</p>
                            <p className="text-justify">0969.836.599</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Styles>
    )
}

export default Contact

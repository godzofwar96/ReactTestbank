import React from 'react'
import { Row, Image, Button, Container, Col, Dropdown, Badge} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    background: #3d3d3d;
    color: #fff;
    padding: 35px 0 0;
    .a {
        color: #fff;
        font-size: 21px;
        padding: 0 10px;
        &:hover {
            text-decoration: none;
            cursor: pointer;
            color: #F00024;
        }
    }
    .bottom {
        border-top: 1px solid #fff;
    }
`;


const Footer = () => {
    return (
        <Styles>
            <div className="pl-5 pr-5">
                <Row className="m-0">
                    <Col xs={12} lg={3} className="text-center" >
                        <a href="/"><Image fluid src='https://testbank.vn/libs/images/logo.png' /></a>
                    </Col>
                    <Col xs={12} lg={9} className="text-center">
                        <Row className="m-0">
                            <Col xs={12} lg={3}>
                                <a className="a" href="#">Tiểu học-THCS-THPT</a>
                            </Col>
                            <Col xs={12} lg={3}>
                                <a className="a" href="#">Đề thi tuyển dụng</a>
                            </Col>
                            <Col xs={12} lg={3}>
                                <a className="a" href="#">Đại học-Cao đẳng</a>
                            </Col>
                            <Col xs={12} lg={3}>
                                <a className="a" href="#">Ngoại ngữ</a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="mt-4 mb-4 pl-5 pr-5">
                    <p className="h4">Testbank là website cung cấp đề thi trắc nghiệm tất cả các lĩnh vực, cho phép người dùng dễ dàng tạo đề thi trắc nghiệm đơn giản nhất, kinh doanh trên chính đề thi mình tạo ra.</p>
                </div>
            </div>
            <div className="bottom p-3 text-center">
                <p className="h5">Giấy phép cung cấp dịch vụ mạng xã hội trực tuyến số 469/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 30/10/2019.</p>
            </div>
        </Styles>
    )
}

export default Footer

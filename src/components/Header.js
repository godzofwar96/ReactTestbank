import React from 'react'
import { Row, Image, Button, Container, Col, Dropdown, Badge} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .list {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .list li {
        margin-left: 0;
    }
    .img {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        margin-left: 10px;
        object-fit: cover;
    }
    a:visited, a:hover, a:link {
        text-decoration: none;
        cursor: pointer;
    }
    .user {
        color: #4D4F5C;
    }
    .create_threads {
        background: #f32424;
        border-radius: 30px;
        padding: 10px 40px;
        color: #fff;
        display: flex;
        font-size: 18px;
        box-shadow: 0 0px 7px 0px #b9b6b6;
        /* margin-right: 50px; */
        transition: all 0.3s;
    }
`;

const Header = (props) => {
    const auth = props.auth
    return (
        <Styles>
        {   //Chưa login
            auth && 
            <Row className="p-3">
                <Col xs={12} md={3} className="text-center">

                </Col>
                <Col xs={12} md={5} className="text-center mb-1 p-2">
                    <Image fluid src='https://testbank.vn/libs/images/logo.png' />
                </Col>
                <Col xs={12} md={4} className="text-center mb-1">
                    <ul className="list">
                        <li>
                            <a className="user" href="#">
                                <span>Đăng nhập</span>
                                <Image className="img" src='https://testbank.vn/libs/images/user.png' />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        }
        {   //Đã login
            !auth && 
            <Row  className="p-3" >
                <Col xs={12} md={8} className="text-center mb-1 p-2">
                    <a href="/"><Image fluid src='https://testbank.vn/libs/images/logo.png' /></a>
                </Col>
                <Col xs={12} md={4} className="text-center mb-1">
                    <ul className="list">
                        <li>
                            <a className="create_threads" href="#">Tạo đề </a>
                        </li>
                        <li>
                            <Dropdown className="ml-2 mr-1">
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    <a href="#" className="user">Nguyễn Hồng Phi</a>
                                    <span className="caret"></span>
                                    <img src="https://ui-avatars.com/api/?size=512&amp;color=fff&amp;background=177bf4&amp;uppercase=true&amp;name=Nguyễn Hồng Phi" className="img"></img>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Header>Welcome, email@example.com</Dropdown.Header>
                                    <Dropdown.Item href="#">
                                        Bộ sưu tập đã tạo
                                        <Badge variant="secondary">1</Badge>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">
                                        Đề thi đã tạo
                                        <Badge variant="secondary">4</Badge>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#">
                                        Thông tin cá nhân
                                        
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <span class="notification">
                                <a href="#">
                                    <Image fluid src="https://testbank.vn/libs/images/ic_notifi.png"/>
                                </a> 
                            </span>
                        </li>
                    </ul>
                </Col>
            </Row>
        }
        </Styles>
    )
}

export default Header

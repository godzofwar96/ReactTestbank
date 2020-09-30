import React from 'react'
import { Nav, Navbar, NavLink, NavItem, NavDropdown, Image ,Dropdown, Form, FormControl, Button , Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const Styles =  styled.div`
    .navbar-brand, .navbar-nav .nav-link, .dropdown {
        font-weight: bold;
        color: #5b6770;
        font-size: 18px;
        padding: 0px 20px;

        &:hover {
            color: #F00024;
        }
    }
`;
const NavigationBar = () => {

    const isWindow = useMediaQuery({ minWidth: 1200 })
    return (
        <Styles className="non-background">
            <Navbar expand="xl" className="p-4">
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                </Navbar.Toggle>
                <Navbar.Collapse className="text-center" id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        {
                            isWindow && 
                            <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>
                                <Image src="https://testbank.vn/libs/images/ic_menu.png" fluid />
                                DANH MỤC
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <a href="#">Tiểu học - THCS - THPT</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Đề thi tuyển dụng</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Đại học - Cao đẳng</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Ngoại ngữ</a>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        }
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>Tiểu học - THCS - THPT</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <a href="#">Thi THPT Quốc gia</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Lớp 5</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Lớp 6</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Lớp 7</a>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>Đề thi tuyển dụng</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <a href="#">Thi THPT Quốc gia</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Lớp 5</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Lớp 6</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Lớp 7</a>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>Đại học - Cao Đẳng</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <a href="#">Thi THPT Quốc gia</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Lớp 5</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Lớp 6</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Lớp 7</a>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={NavLink}>Ngoại Ngữ</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <a href="#">Thi THPT Quốc gia</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Lớp 5</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Lớp 6</a>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <a href="#">Lớp 7</a>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

export default NavigationBar

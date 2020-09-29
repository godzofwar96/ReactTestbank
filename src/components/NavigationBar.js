import React from 'react'
import { Nav, Navbar, NavLink, NavItem, NavDropdown, Image , Form, FormControl, Button , Row } from 'react-bootstrap';
import styled from 'styled-components';

const Styles =  styled.div`
    .navbar {
        background-color: #33ccff;
    }
    .navbar-brand, .navbar-nav .nav-link, .dropdown {
        color: #222;
        font-weight: bold;

        &:hover {
            color: #fff;
        }
    }
    .logo {
        width: 45px;
        height: 45px;
    }
`;
const NavigationBar = () => {
    return (
        <Styles>
            <Navbar expand="xl">
                <Navbar.Brand className="mr-auto" href="/">
                    <Image src='https://s1.uphinh.org/2020/09/21/logo.gif' className="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" ></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        <NavItem>
                            <NavLink href="/">TRANG CHỦ</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">GIỚI THIỆU</NavLink>
                        </NavItem>
                        
                        <NavDropdown title="DỊCH VỤ" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Tư vấn nhân sự</NavDropdown.Item>
                            <NavDropdown.Item href="#">Hướng dẫn và đào tạo</NavDropdown.Item>
                            <NavDropdown.Item href="#">Công nghệ hỗ trợ</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Yêu cầu đào tạo</NavDropdown.Item>
                        </NavDropdown>
                        <NavItem>
                            <NavLink href="/">HỆ THỐNG KHÓA HỌC</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">LIÊN HỆ</NavLink>
                        </NavItem>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="warning" type="submit"><b>Tìm kiếm</b></Button>
                    </Form>
                    <Form inline className="ml-auto">
                        <Button className="mr-1" variant="primary"><b>Đăng nhập</b></Button> 
                        <Button className="ml-1" variant="success"><b>Đăng ký</b></Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

export default NavigationBar

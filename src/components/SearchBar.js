import React, { useState } from 'react'
import { Button, Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    padding: 20px 0;
    margin: 0;
    h1 {
        font-size: 30px;
        margin: 0;
        color: #5b6770;
        margin-bottom: 10px;
    }
    p {
        color: #5b6770;
        font-size: 18px;
    }
    .flexRow {
        margin: 0;
        padding: 0 5%;
        justify-content: space-around;
    }
    .form-search {
        padding: 8px 20px;
        border-radius: 30px;
        min-width: 400px;
        position: relative;
        background: #fff;
        display: flex;
        align-items: center;
    }
    .form-search input {
        border: none;
        padding: 10px 20px 10px 10px;
        color: #999;
        font-size: 18px;
    }
    .btn-search {
        background: #f32424;
        border-radius: 30px;
        border: none;
        color: #fff;
        padding: 18px 50px;
        position: absolute;
        top: 2px;
        right: 0;
    }
    .ic_search {
        margin-top: -3px;
    }
`;

const SearchBar = () => {
    return (
        <Styles>
            <Row className="flexRow">
                <Col xs={12} md={5}>
                    <div class="content float-left">
                        <h1>Ngân hàng đề thi</h1>
                        <p>101.320 câu hỏi | 831 đề thi | 70 bộ sưu tập </p>
                    </div>
                </Col>
                <Col xs={12} md={5} className="ml-auto">
                    <div class="search float-right mt-2">
                        <form class="form-search">
                            <img src="https://testbank.vn/libs/images/icon-search.png" class="ic_search" />
                            <input id="goto-page" placeholder="Nhập mã truy cập" />
                            <button onclick="GoToPage()" type="button" class="btn-search">Truy cập</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Styles>
    )
}

export default SearchBar

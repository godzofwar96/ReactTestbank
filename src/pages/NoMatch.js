import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
    .error-template {
        padding: 40px 15px;
        text-align: center;
    }
    .error-actions {
        margin-top:15px;
        margin-bottom:15px;
    }
    .error-actions .btn { 
        margin-right:10px; 
    }
`;
const NoMatch = () => {
    return (
        <Styles className="container text-center">
            <Row>
                <Col md={12}>
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <a href="http://www.jquery2dotnet.com" className="btn btn-primary btn-lg">
                                <span className="glyphicon glyphicon-home"></span>
                                Take Me Home 
                            </a>
                            <a href="http://www.jquery2dotnet.com" className="btn btn-default btn-lg">
                                <span className="glyphicon glyphicon-envelope"></span> 
                                Contact Support 
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Styles>
    )
}

export default NoMatch

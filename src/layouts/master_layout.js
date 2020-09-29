import React from 'react'
import { Container } from 'react-bootstrap';
const MasterLayout = (props) => (
    <Container>
        <div>
            {props.children}
        </div>
    </Container>
)

export default  MasterLayout

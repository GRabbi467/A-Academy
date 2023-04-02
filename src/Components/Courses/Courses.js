import React from 'react';
import './Courses.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar-course/Sidebar';
import Footer from './../Footer/Footer';

const Courses = () => {
    return (
        <div>
            <Container className='container'>
                <Row >
                    <Col className='col-1' lg={3}>
                    <Sidebar></Sidebar>
                    </Col>
                    <Col className='col-1' lg={7}>
                    <Outlet></Outlet>
                    </Col>
                    <Col className='col-1' lg={2}></Col>
                </Row>
            </Container>
            <Footer/>
          
        </div>
    );
};

export default Courses;
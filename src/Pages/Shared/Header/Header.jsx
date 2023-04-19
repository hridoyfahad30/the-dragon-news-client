import React from 'react';
import logo from '.././../../assets/logo.png'
import moment from 'moment'
import { Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee"
import profile from '../../../assets/profile.png'

const Header = () => {
    return (
        <Container className='my-5 mb-5'>
            <div className="text-center my-3">
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p> <strong>{moment().format("dddd")}</strong>, {moment().format("MMMM D YYYY")}</p>
            </div>
            <div className='d-flex bg-secondary bg-opacity-10 p-2 rounded'>
                <button className='btn btn-danger me-4'>Latest </button>
                <Marquee speed={40} pauseOnHover={true} gradient={false} className='fw-semibold'>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <div className='my-1'>
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fw-semibold">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <img src={profile} alt="" />
                            <Nav.Link eventKey={2} href="#memes">
                            <button className='btn bg-black px-5 text-light fw-bold py-2'>LogIn</button>
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;
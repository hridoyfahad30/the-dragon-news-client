import React from 'react';
import logo from '.././../../assets/logo.png'
import moment from 'moment'
import { Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {


    return (
        <Container className='my-3 mt-5'>
            <div className="text-center my-3">
                <img className='img-fluid' src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p> <strong>{moment().format("dddd")}</strong>, {moment().format("MMMM D YYYY")}</p>
            </div>
            <div className='d-flex bg-secondary bg-opacity-10 p-2 rounded'>
                <button className='btn btn-danger me-4'>Latest </button>
                <Marquee speed={40} pauseOnHover={true} gradient={false} className='fw-semibold'>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;
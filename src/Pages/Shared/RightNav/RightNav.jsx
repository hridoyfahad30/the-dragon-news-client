import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import QZone from '../QZone/QZone';
import rightAdd from '../../../assets/bg.png';

const RightNav = () => {
    return (
        <div>
            <h1 className='fs-4 fw-bold mb-4'>LogIn With</h1>
            <div>
                <Button className='my-2 fw-semibold px-5 d-flex align-items-center' variant="outline-primary"> <FaGoogle className='fs-4 me-2'></FaGoogle>  LogIn With Google</Button>
                <Button className='my-2 fw-semibold px-5 d-flex align-items-center' variant="outline-secondary"> <FaGithub className='fs-4 me-2'></FaGithub> LogIn With Git Hub</Button>
            </div>
            <div>
                <h1 className='fs-4 fw-bold mt-5 mb-4'>Find Us On</h1>
                <div>
                <ListGroup>
                    <ListGroup.Item> <Button variant="outline-secondary" className='w-100 btn d-flex align-items-center fw-semibold'><FaFacebook className='me-3 fs-4'></FaFacebook> Facebook</Button> </ListGroup.Item>
                    <ListGroup.Item> <Button variant="outline-secondary" className='w-100 btn d-flex align-items-center fw-semibold'><FaTwitter className='me-3 fs-4'></FaTwitter> Twitter</Button> </ListGroup.Item>
                    <ListGroup.Item> <Button variant="outline-secondary" className='w-100 btn d-flex align-items-center fw-semibold'><FaInstagramSquare className='me-3 fs-4'></FaInstagramSquare> Instagram</Button> </ListGroup.Item>
                </ListGroup>
                </div>
            </div>

            <div>
                <QZone></QZone>
            </div>

            <div>
                <div className='position-relative my-3'>
                    <img className='w-100' src={rightAdd} alt="" />
                    <div className='text-light position-absolute top-0 mt-5 text-center px-5'>
                         <h1 className='my-4'>Create an Amazing Newspaper</h1>
                         <p className='my-4 fs-5 fw-light'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                         <button className="btn btn-danger p-4 fs-4">Learn More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RightNav;
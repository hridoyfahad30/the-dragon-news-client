import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Container, Nav, Navbar } from 'react-bootstrap';
import profile from '../../../assets/profile.png'
import { Link } from 'react-router-dom';

const DragonNav = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className='mb-4'>
            <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fw-semibold d-flex align-items-center gap-4">
                            <Link className='text-decoration-none text-reset' to='/'>Home</Link>
                            <Link className='text-decoration-none text-reset'>About</Link>
                            <Link className='text-decoration-none text-reset'>Career</Link>
                        </Nav>
                        <Nav className='d-flex align-items-center gap-2'>
                            {
                                user && <img src={profile} alt="" />
                            }
                            
                            {
                                user? <button onClick={handleLogOut} className='btn bg-black px-5 text-light fw-bold py-2'>LogOut</button> : 
                                <Link to='/login'>
                                    <button className='btn bg-black px-5 text-light fw-bold py-2'>LogIn</button>
                                </Link>
                            }
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
        </div>
    );
};

export default DragonNav;
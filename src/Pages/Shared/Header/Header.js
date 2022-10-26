import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { Image } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(e => console.error(e))
    }
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className='fw-semibold text-primary'><Link className='text-decoration-none' to='/'>NewsPortal</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>All News</Nav.Link>
                        <Nav.Link>Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item>
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item>Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className=' d-flex justify-content-between align-items-center'>
                        {
                            user ?
                            <>
                                <div className='border border-3 border-primary border-opacity-50 rounded-circle '>
                                    {
                                        user.photoURL ? 
                                            <Image
                                            style={{height: '40px'}} roundedCircle
                                            src={user.photoURL}
                                            ></Image>:
                                            <FaUserCircle className='fs-2'></FaUserCircle>
                                    }
                                </div>
                                <div>
                                    {
                                        user.displayName 
                                        ? 
                                        <h5 className='ms-2 m-0'>{user?.displayName}</h5>
                                        :
                                        <h5 className='ms-2 m-0'>{user?.email}</h5>
                                    }
                                    
                                </div>
                                <Button onClick={handleLogOut} className='ms-4' variant="outline-primary"><FaSignOutAlt></FaSignOutAlt></Button>
                            </> :
                            <>
                                <Link to='/login'><Button className='ms-2' variant="outline-primary">LogIn</Button></Link>
                                <Link to='/signup'><Button className='ms-2' variant="outline-success">SignUp</Button></Link>
                                
                            </>
                        }
                        <hr />
                        <div className="d-lg-none">
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
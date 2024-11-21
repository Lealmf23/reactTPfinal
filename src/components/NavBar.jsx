import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'



const NavBar = () => {
    const { login, handleLogout } = useContext(AuthContext)
    return (
        <>
            <Navbar
                expand='lg'
                className='bg-body-tertiary'>
                <Container>
                    <Navbar.Brand href='/'>
                        <img
                            src='./img/LogoLienzosIcon.png'
                            width='30'
                            height='30'
                            className='d-inline-block align-top'
                            alt='React Bootstrap logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link
                                as={Link}
                                to='/'>
                                Productos
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to='/contacto'>
                                Contacto
                            </Nav.Link>
                            {!login && (
                                <>
                                    <Nav.Link
                                        as={Link}
                                        to='/registro'>
                                        Registro
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link}
                                        to='/login'>
                                        Login
                                    </Nav.Link>
                                </>
                            )}

                            {login && (
                                <>
                                    <Nav.Link
                                        as={Link}
                                        to='/dashboard'>
                                        Dashboard
                                    </Nav.Link>

                                    <Nav.Link
                                        onClick={handleLogout}
                                        as={Link}
                                        to='/'>
                                        Salir
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
 
export default NavBar;
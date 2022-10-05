import '../scss/NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useLoginContext } from '../context/LoginContext';




const NavBar = () => {

    const {user, logout} = useLoginContext()
    
    return ( 

        <Navbar bg="dark" variant="dark" className="menu">
        <Container className="menu1" >
            <Link to="/"><Navbar.Brand href="/">DistriBA</Navbar.Brand></Link> 

            <Nav className="me-auto">
            <Link to='/productos/alimentos' className="header-navlink">Alimentos</Link>
            <Link to='/productos/accesorios' className="header-navlink">Accesorios</Link>
            <Link to='/Contacto' className="header-navlink">Contacto</Link>
            </Nav>
            
        </Container>
        <CartWidget className="carrito"></CartWidget>
        <div className='header-user'>
                <small>Bienvenido: {user.user}</small>
                <button onClick={logout} className='btn btn-outline-danger'>Logout</button>
            </div>
        
        </Navbar>

);
}

export default NavBar
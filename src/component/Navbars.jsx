import { Navbar,Container, Nav} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const Navbars = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <LinkContainer to="/">
                        <Nav.Link href="#dashboard">DASHBOARD</Nav.Link>
                    </LinkContainer>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to="/barang">
                        <Nav.Link href="#barang" >List Barang</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/create">
                        <Nav.Link href="#create" >Create Barang</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}
    
export default Navbars;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./index.scss";
// import Button from "../Button";
import logo from "../../assets/images/madhviLogo.png"

function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-wrapper bg-white">
      <Container  className="" >
        <Navbar.Brand className="me-0" href="/">
          <div className="logoTitle">Madhvi Dairy Products</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link style={{ padding: "8px 16px" }} href="/pricing">
              <span className="nav-title">OUR RECEIPES</span>
            </Nav.Link>
            <Nav.Link style={{ padding: "8px 16px" }} href="/reviews">
              <span className="nav-title">EXPERT ADVICE</span>
            </Nav.Link>
            <Nav.Link style={{ padding: "8px 16px" }} href="/check-my-growth">
              <span className="nav-title">OUR PRODUCTS</span>
            </Nav.Link>
            <Nav.Link style={{ padding: "8px 16px" }} href="/about">
              <span className="nav-title">ALL THINGS DAIRY</span>
            </Nav.Link>
          </Nav>
          {/* <Nav.Link className="sign-in-btn-link" href="/signin">
            <button  style={{height: '52px'}}  className="sign-in-btn me-3 fnt-urban mb-signin-button-title">Sign In</button>
          </Nav.Link> */}
          <Navbar.Brand className="me-0" href="/">
          <img className="mainLogo" height={"33px"} src={logo} />
        </Navbar.Brand>
          {/* <Nav.Link className="start-growth-btn-link" href="/check-out">
            <Button style={{height: '52px'}} title={"START MY GROWTH"} />
          </Nav.Link> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import LandingPage from "./LandingPage";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";
import AboutMe from "./AboutMe";
import MapComponent from "./MapComponent";

const App = () => (
  <Router>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Timer App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink
              to="/stop-watch"
              className="nav-link"
              activeClassName="active"
            >
              Stop watch
            </NavLink>
            <NavLink
              to="/count-down"
              className="nav-link"
              activeClassName="active"
            >
              Count down
            </NavLink>
            <NavLink
              to="/about-me"
              className="nav-link"
              activeClassName="active"
            >
              About me
            </NavLink>
            <NavLink
              to="/contact-me"
              className="nav-link"
              activeClassName="active"
            >
              Contact me
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className="mt-3">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stop-watch" element={<Stopwatch />} />
        <Route path="/count-down" element={<Countdown />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact-me" element={<MapComponent />} />
      </Routes>
    </Container>
  </Router>
);

export default App;

import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const LandingPage = () => (
  <Container className="text-center mt-5">
    <Helmet>
      <title>Home - Timer App</title>
    </Helmet>
    <h1>Welcome to the Timer App</h1>
    <p>
      This app provides both a stopwatch and a countdown timer. Choose one to
      get started!
    </p>
    <Button
      variant="primary"
      size="lg"
      as={Link}
      to="/stop-watch"
      className="m-2"
    >
      Stop Watch
    </Button>
    <Button
      variant="secondary"
      size="lg"
      as={Link}
      to="/count-down"
      className="m-2"
    >
      Count Down
    </Button>
  </Container>
);

export default LandingPage;

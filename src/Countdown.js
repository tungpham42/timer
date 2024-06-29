import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Countdown = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    let interval;
    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setRunning(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const startCountdown = () => {
    setTime(parseInt(input, 10));
    setRunning(true);
  };

  const reset = () => {
    setTime(0);
    setRunning(false);
    setInput("");
  };

  // Convert time in seconds to HH:MM:SS format
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <Container className="text-center mt-5">
      <Helmet>
        <title>Countdown - Timer App</title>
      </Helmet>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>Countdown Timer</h2>
          <pre className="display-1">{formatTime(time)}</pre>
          <Form.Control
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter time in seconds"
            className="my-3"
            size="lg"
          />
          <div className="mt-3">
            <Button
              variant="primary"
              size="lg"
              className="me-2"
              onClick={startCountdown}
            >
              Start
            </Button>
            <Button variant="danger" size="lg" onClick={reset}>
              Reset
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Countdown;

import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  const reset = () => {
    setTime(0);
    setRunning(false);
  };

  return (
    <Container className="text-center mt-5">
      <Helmet>
        <title>Stopwatch - Timer App</title>
      </Helmet>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>Stopwatch</h2>
          <pre className="display-1">{formatTime(time)}</pre>
          <div className="mt-3">
            {!running ? (
              <>
                {time === 0 ? (
                  <Button
                    variant="primary"
                    size="lg"
                    className="me-2"
                    onClick={() => setRunning(true)}
                  >
                    <FontAwesomeIcon icon={faPlay} /> Start
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    size="lg"
                    className="me-2"
                    onClick={() => setRunning(true)}
                  >
                    <FontAwesomeIcon icon={faPlay} /> Resume
                  </Button>
                )}
                <Button
                  variant="danger"
                  size="lg"
                  className="me-2"
                  onClick={reset}
                >
                  <FontAwesomeIcon icon={faRedo} /> Reset
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="warning"
                  size="lg"
                  className="me-2"
                  onClick={() => setRunning(false)}
                >
                  <FontAwesomeIcon icon={faPause} /> Pause
                </Button>
                <Button variant="danger" size="lg" onClick={reset}>
                  <FontAwesomeIcon icon={faRedo} /> Reset
                </Button>
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Stopwatch;

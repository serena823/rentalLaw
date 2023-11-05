import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(`Your legal support available: ${inputValue}`);
    setInputValue("");
  };

  return (
    <div className="input-form-container">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="input-question-label">
            <Form.Label column sm={12}>
              Please describe your rental issue:
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row} controlId="input-question">
            <Col sm={9}>
              <Form.Control
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter something..."
                className="input-field"
              />
            </Col>
            <Col sm={3}>
              <Button
                variant="primary"
                type="submit"
                className="submit-button w-100"
              >
                Submit
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>

      {response && <div className="response-info">{response}</div>}
    </div>
  );
};

export default InputForm;

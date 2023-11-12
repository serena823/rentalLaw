import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import axios from "axios";

const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const apiResponse = await axios.post(
        "https://ihx4qcruvgfnyr43gl6cmypdy40luiyl.lambda-url.us-east-1.on.aws/",
        {
          input: inputValue,
        }
      );

      const content = apiResponse.data.response.choices[0].message.content;
      setResponse(content);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponse("An error occurred while fetching data");
    }
    setIsLoading(false);
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
                disabled={isLoading}
              >
                {isLoading ? (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Submit"
                )}
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

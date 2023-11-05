import "./App.css";
import { Container } from "react-bootstrap";
import InputForm from "./components/InputForm";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100 ">
      <Navigation />
      <Container
        fluid
        className="flex-grow-1 d-flex align-items-center justify-content-center bg-custom"
      >
        <InputForm />
      </Container>

      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from './Container';
import SignupForm from './SignupForm/SignupForm';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import './App.scss';
import './normalize.css';

function App() {
  return (
    <BrowserRouter>
    <Route path='/' element={} />
      <Container>
        <Navbar />
        <SignupForm />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;

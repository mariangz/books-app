import './App.scss';
import './normalize.css';
import Container from './Container';
import SignupForm from './SignupForm/SignupForm';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <Container>
      <Navbar />
      <SignupForm />
      <Footer />
    </Container>
  );
}

export default App;

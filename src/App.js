import './App.scss';
import './normalize.css';
import Container from './Container';
import SignupForm from './SignupForm/SignupForm';
import Login from './Login/Login';
import Footer from './Footer/Footer';

function App() {
  return (
    <Container>
      <Login />
      {/* <Footer /> */}
    </Container>
  );
}

export default App;

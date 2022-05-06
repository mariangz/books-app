import './App.scss';
import './normalize.css';
import Container from './Container';
import SignupForm from './SignupForm/SignupForm';
import Footer from './Footer/Footer';

function App() {
  return (
    <Container>
      <SignupForm />
      {/* <Footer /> */}
    </Container>
  );
}

export default App;

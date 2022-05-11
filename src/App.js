import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SignupForm from './Components/SignupForm/SignupForm';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Container from './Components/Container';
import './App.scss';
import './normalize.css';

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;

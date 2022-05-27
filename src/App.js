import { Route, Routes, useSearchParams } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SignupForm from './Components/SignupForm/SignupForm';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Container from './Components/Container';
import ProtectedRoute from './Components/ProtectedRoute';
import BookCard from './Components/BookCard/BookCard';
import GridBooks from './Components/GridBooks/GridBooks';
import { UserProvider } from './UserContext';
import { UserContext } from './UserContext';
import { useContext } from 'react';

import './App.scss';
import './normalize.css';
function App() {
  return (
    <UserProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/card' element={<BookCard />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/books' element={<GridBooks />} />
          </Route>
        </Routes>
        <Footer />
      </Container>
    </UserProvider>
  );
}

export default App;

import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../UserContext';

export default function ProtectedRoute() {
  const [user] = useContext(UserContext);
  return user ? <Outlet /> : <Navigate to='login' replace />;
}

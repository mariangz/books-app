import { UserProvider } from './UserContext';
import App from './App';

export default function ApWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

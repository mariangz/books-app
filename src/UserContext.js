import { createContext } from 'react';

const UserContext = createContext();

function UserProvider(props) {
  const user = '';

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };

import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import clsx from 'clsx';

export default function Container({ children }) {
  const context = useContext(ThemeContext);
  return (
    <div className={clsx({ container: true, dark: context.theme === 'dark' })}>
      {children}
    </div>
  );
}

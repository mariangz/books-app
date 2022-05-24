import clsx from 'clsx';

export default function Container({ children }) {
  return <div className={clsx({ container: true })}>{children}</div>;
}

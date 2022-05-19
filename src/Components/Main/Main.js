import './Main.scss';
import { description } from './mainlist';

export default function Main() {
  return (
    <main className='main'>
      {description.map((item) => (
        <div key={item.title} className='box'>
          <img src={item.img} alt='' />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </main>
  );
}

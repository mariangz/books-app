import './Main.scss';
import { description } from './mainlist';
import arrange from '../../images/arrange.svg';
import pileOfBook from '../../images/pileOfBook.svg';
import reading from '../../images/reading.svg';

export default function Main() {
  return (
    <main className='main'>
      {/* {description.map((item) => (
        <div>
          <img src={item.img} alt='' />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))} */}
      <div>
        <img src={pileOfBook} alt='' />
        <h3>Read Free Books</h3>
        <p>Millions of books available in our open library</p>
      </div>
      <div>
        <img src={arrange} alt='' />
        <h3>Stay Organized</h3>
        <p>Organize your books using our online shelves</p>
      </div>
      <div>
        <img src={reading} alt='' />
        <h3>Share Your Thoughts</h3>
        <p>Write a review and give them a rating</p>
      </div>
    </main>
  );
}

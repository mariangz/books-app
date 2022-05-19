import './BookCard.scss';
import noBookCover from '../../images/noBookCover.png';

export default function BookCard(props) {
  const info = props.details.volumeInfo;
  return (
    <div className='bookCard'>
      {info.imageLinks?.thumbnail ? (
        <img className='coverImg' src={info.imageLinks?.thumbnail} alt='book' />
      ) : (
        <img className='coverImg' src={noBookCover} alt='book' />
      )}
      <div className='text'>
        <h3 className='author'>{info.title}</h3>
        <p>{info.authors}</p>
      </div>
    </div>
  );
}

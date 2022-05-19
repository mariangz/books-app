import Loading from '../Loading/Loading';
import BookCard from '../BookCard/BookCard';
import './GridBooks.scss';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { Navigate } from 'react-router-dom';

export default function GridBooks(props) {
  // if (!props.user) {
  //   console.log(props.user);
  //   return <Navigate to='/login' replace />;
  // }
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  let offSet = (page - 1) * 10;

  function nextPage() {
    console.log(page);
    setPage((prevValue) => prevValue + 1);
    console.log(page);
    searchParams.set('page', page);

    setSearchParams(searchParams);
    // for (var pair of searchParams.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
    // console.log(searchParams.entries());
  }

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchParams.get(
        'search'
      )}&key=${API_KEY}&startIndex=${offSet}&maxResults=10`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setBooks(data.items);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams.get('search'), searchParams.get('page')]);

  useEffect(() => {
    console.log(page);
    setPage(1);
  }, [searchParams.get('search')]);

  return (
    <>
      <div className='gridBooks'>
        {isLoading && <Loading />}
        {books && books.map((book) => <BookCard details={book} />)}
      </div>
      <button onClick={nextPage}>Next</button>
    </>
  );
}

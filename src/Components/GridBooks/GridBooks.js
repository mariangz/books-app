import Loading from '../Loading/Loading';
import BookCard from '../BookCard/BookCard';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './GridBooks.scss';

export default function GridBooks() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const paramsSearch = searchParams.get('search');
  const paramsPage = searchParams.get('page');
  const API_KEY = 'AIzaSyCUcZ7nXYWrMmXkuBXNROY3lF4bLzsKFhg';
  let offSet = (page - 1) * 10;

  function nextPage() {
    setPage((prevValue) => prevValue + 1);
    searchParams.set('page', page);
    setSearchParams(searchParams);
  }

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchParams.get(
        'search'
      )}&key=${API_KEY}&startIndex=${offSet}&maxResults=10`
    )
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [paramsSearch, paramsPage]);

  useEffect(() => {
    setPage(1);
  }, [paramsSearch]);

  return (
    <>
      {isLoading && <Loading />}
      <div className='gridBooks'>
        {books &&
          books.map((book, index) => <BookCard details={book} key={index} />)}
      </div>
      <button onClick={nextPage} className='button'>
        Next
      </button>
    </>
  );
}

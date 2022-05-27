import Loading from '../Loading/Loading';
import BookCard from '../BookCard/BookCard';
import { useSearchParams, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './GridBooks.scss';

export default function GridBooks() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  let offSet = (page - 1) * 10;
  const API_KEY = 'AIzaSyCUcZ7nXYWrMmXkuBXNROY3lF4bLzsKFhg';

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
  }, [searchParams.get('search'), searchParams.get('page')]);

  useEffect(() => {
    setPage(1);
  }, [searchParams.get('search')]);

  return (
    <>
      <div className='gridBooks'>
        {isLoading && <Loading />}
        {books && books.map((book) => <BookCard details={book} />)}
      </div>
      <button onClick={nextPage} className='button'>
        Next
      </button>
    </>
  );
}

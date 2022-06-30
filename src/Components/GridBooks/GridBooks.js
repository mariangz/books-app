import Loading from '../Loading/Loading';
import BookCard from '../BookCard/BookCard';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './GridBooks.scss';
import clsx from 'clsx';

export default function GridBooks() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [empty, setEmpty] = useState(true);
  const paramsSearch = searchParams.get('search');
  const paramsPage = searchParams.get('page');
  const API_KEY = 'AIzaSyCUcZ7nXYWrMmXkuBXNROY3lF4bLzsKFhg';

  let offSet = (page - 1) * 10;

  function nextPage() {
    setPage((prevValue) => prevValue + 1);
  }

  useEffect(() => {
    searchParams.set('page', page);
    setSearchParams(searchParams);
  }, [page]);

  function previousPage() {
    setPage((prevValue) => prevValue - 1);
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

    if (!books) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [paramsSearch, paramsPage]);

  useEffect(() => {
    setPage(1);
  }, [paramsSearch]);

  return (
    <>
      {isLoading && <Loading />}
      {empty ? (
        <p>Sorry, we didn't find any book</p>
      ) : (
        <>
          <div className='gridBooks'>
            {books &&
              books.map((book, index) => (
                <BookCard details={book} key={index} />
              ))}
          </div>
          <div className='btn-container'>
            <button
              onClick={previousPage}
              disabled={offSet === 0}
              className={clsx({
                button: offSet !== 0,
                page: offSet !== 0,
                disabled: offSet === 0,
              })}
            >
              Previous
            </button>
            <button onClick={nextPage} className='button page'>
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}

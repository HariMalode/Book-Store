import React from 'react';
import { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const Navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = async () => { // Make the function async
    setLoading(true);
    try {
      await axios.delete(`https://hari-book-store.onrender.com/books/${id}`);
      setLoading(false);
      enqueueSnackbar('Book Deleted Successfully', { variant: 'success' });
      Navigate('/');
    } catch (error) {
      console.log(error);
      setLoading(false);
      enqueueSnackbar('Error while deleting the book', { variant: 'error' });
    }
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You Want to delete this book?</h3>

        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handleDeleteBook}>
          Yes, Delete it!
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;

import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const EditBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const Navigate = useNavigate()
  const { id } = useParams()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`https://hari-book-store.onrender.com/books/${id}`)
        const daa = await response.json();
        setTitle(daa.title)
        setAuthor(daa.author)
        setPublishYear(daa.publishYear)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
        alert("Error while fetching the book")
      }
    }
    fetchData()
  }, [id])

  const handleEditBook = async () => {
    const data = {
      title,
      author,
      publishYear
    }
    setLoading(true)
    try {
      await axios.put(`https://hari-book-store.onrender.com/books/${id}`, data)
      setLoading(false)
      enqueueSnackbar('Book Updated Successfully', { variant: 'success' })
      Navigate('/')
    } catch (error) {
      console.log(error)
      setLoading(false)
      enqueueSnackbar('Error while updating the book', { variant: 'error' })
    }
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}

      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 w-full py-2'
            required
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 w-full py-2'
            required
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 w-full py-2'
            required
          />
        </div>

        <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>
          Save Book
        </button>
      </div>
    </div>
  )
}

export default EditBook

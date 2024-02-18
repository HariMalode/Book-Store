import React from 'react'
import { Routes,Route } from 'react-router-dom'
//to use Routes

//importing all pages
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'


const App = () => {
  return (
    // <div>
    //   <div className="bg-red-400">APP</div>
    // </div>
    <Routes>
      {/* //placing Routes in frontend */}
      <Route path="/" element={<Home/>} />  
      <Route path="/books/create" element={<CreateBooks/>} />
      <Route path="/books/details/:id" element={<ShowBook/>} />
      <Route path="/books/delete/:id" element={<DeleteBook/>} />
      <Route path="/books/edit/:id" element={<EditBook/>} />
     
    </Routes>
  )
}
 
export default App

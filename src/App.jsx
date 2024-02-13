// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import BookDetails from './pages/BookDetails/BookDetails'
import BookSearch from './pages/BookSearch/BookSearch'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleAddComment = async (commentFormData) => {
    const newComment = await bookService.create(commentFormData)
    setComments([newComment, ...comments])
    navigate('/book/:id/comments')
  }

  const handleUpdateComment = async (commentFormData) => {
    const updatedComment = await bookService.update(commentFormData)
    setBlogs(comments.map(comment => comment._id === updatedComment._id ? updatedComment : comment))
    navigate('/book/:id/comments')
  }

  const handleDeleteComment = async (commentId) => {
    const deletedComment = await bookService.deleteComment(commentId)
    setComments(comments.filter(comment => comment._id !== deletedComment._id))
    navigate('/book/:id/comments')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route 
        path="/bookSearch" 
        element={<BookSearch />} 
        />
        <Route 
        path="/book/:id" 
        element={<BookDetails />} 
        />


      </Routes>
    </>
  )
}

export default App

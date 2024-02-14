// npm modules
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Logout from './pages/Logout/Logout'
import About from './pages/About/About'
import BookSearch from './pages/BookSearch/BookSearch'
import LibraryList from './pages/LibraryList/LibraryList'
import BookDetails from './pages/BookDetails/BookDetails'
import Profiles from './pages/Profiles/Profiles'
import MyProfile from './pages/MyProfile/MyProfile'


// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Comments from "../src/components/Comments/Comments"

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

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
      <Route
          path="/"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route path="/auth/logout" element={<Logout />} />
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
          path="/about" 
          element={<About />} 
        />
        <Route 
          path="/library" 
          element={<LibraryList />} 
        />
        <Route 
          path="/search" 
          element={
            <ProtectedRoute user={user}>
              <BookSearch />
            </ProtectedRoute>
          }          
        />
        <Route 
          path="/book/:id" 
          element={<BookDetails />} 
        />
        <Route 
          path='/book/:id/comments'
          element={
            <ProtectedRoute user={user}>
              <Comments />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/profiles" 
          element={
            <ProtectedRoute user={user}>
              <Profiles user={user} />
            </ProtectedRoute>
          }          
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute user={user}>
              <MyProfile user={user}/>
            </ProtectedRoute>
          }          
        />
      </Routes>
    </>
  )
}

export default App

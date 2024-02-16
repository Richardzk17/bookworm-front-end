// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/books`


async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(bookId) {
  try {
    const res = await fetch(`${BASE_URL}/${bookId}`, {
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function showByOLId(OLId) {
  try {
    const res = await fetch(`${BASE_URL}/OLId/${OLId}`, {
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(bookFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function update(bookFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${bookFormData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createComment(bookId, commentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${bookId}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteComment(bookId, commentId) {
  try {
    const res = await fetch(`${BASE_URL}/${bookId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createReview(bookId, reviewFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${bookId}/reviews`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function editReview(bookId, reviewId, reviewFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${bookId}/reviews/${reviewId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteReview(bookId, reviewId) {
  try {
    const res = await fetch(`${BASE_URL}/${bookId}/reviews/${reviewId}`, {
      method: 'DELETE',
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  showByOLId,
  create,
  update,
  createComment,
  deleteComment,
  createReview,
  editReview,
  deleteReview,
}
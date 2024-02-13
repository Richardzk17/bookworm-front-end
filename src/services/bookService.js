// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/bookDetails`


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

async function createComment(commentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${commentFormData.bookId}/comments`, {
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

async function updateComment(commentFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${commentFormData.bookId}/comments/${commentFormData._id}`, {
      method: 'PUT',
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

async function updateReview(reviewFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${bookId}/reviews/${reviewFormData._id}`, {
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
  create,
  update,
  createComment,
  updateComment,
  deleteComment,
  createReview,
  updateReview,
  deleteReview,
}
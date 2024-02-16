// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function show(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addPhoto(photoData) {
  try {
    const photoFormData = new FormData()
    photoFormData.append('photo', photoData)
    const profileId = tokenService.getUserFromToken().profile
    const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoFormData,
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function addToBookshelf(bookId) {
  try {
    const profileId = tokenService.getUserFromToken().profile
    const res = await fetch(`${BASE_URL}/${profileId}/bookshelf/${bookId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function deleteFromBookshelf(bookId) {
  try {
    const profileId = tokenService.getUserFromToken().profile
    const res = await fetch(`${BASE_URL}/${profileId}/bookshelf/${bookId}`, {
      method: 'DELETE',
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { 
  getAllProfiles, 
  addPhoto, 
  show,
  addToBookshelf,
  deleteFromBookshelf,
}

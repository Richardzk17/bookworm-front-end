const baseUrl = 'https://openlibrary.org';

export async function searchBooksByTitle(title) {
  const response = await fetch(`${baseUrl}/search.json?title=${title}`);
  const data = await response.json();
  return data.docs;
}

export async function getBookDescription(OLId) {
  const response = await fetch(`${baseUrl}/works/${OLId}.json`);
  const data = await response.json();
  return data.description.value || data.description;
}

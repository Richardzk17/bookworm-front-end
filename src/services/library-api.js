const baseUrl = 'https://openlibrary.org';

export async function searchBooksByTitle(title) {
  const response = await fetch(`${baseUrl}/search.json?title=${title}`);
  const data = await response.json();
  return data.docs;
}

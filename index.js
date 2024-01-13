function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
      // Call the renderBooks function with the JSON data
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

// Call fetchBooks when the page is loaded
document.addEventListener('DOMContentLoaded', fetchBooks);

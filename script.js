fetch('data.txt')
  .then(response => {
    if (!response.ok) {
       throw new Error('File not found');
    }
    return response.text(); // Extract the text from the response
  })
  .then(data => {
    // Print the data to the HTML element
    document.getElementById('content').textContent = data;
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('content').textContent = 'Failed to load data.';
  });

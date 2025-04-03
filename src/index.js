console.log('%c HI', 'color: firebrick')
// Challenge 1 - Fetch dog images and render to DOM

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

document.addEventListener('DOMContentLoaded', () => {
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      const dogImages = data.message; // Array of image URLs
      const imgContainer = document.getElementById('dog-images');
      dogImages.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Random dog image';
        img.width = 200; // Adjust size as needed
        imgContainer.appendChild(img);
      });
    })
    .catch(error => console.error('Error fetching dog images:', error));
});

// Challenge 2 - Fetch and display dog breeds

const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', () => {
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const breeds = Object.keys(data.message); // Array of breed names
      const breedList = document.getElementById('breed-list');
      breeds.forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
        breedList.appendChild(li);
      });
    })
    .catch(error => console.error('Error fetching dog breeds:', error));
});

// Challenge 3 - Change font color of clicked breed

document.addEventListener('DOMContentLoaded', () => {
    // Fetch dog breeds as before
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        const breedList = document.getElementById('breed-list');
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          
          // Add event listener to change font color on click
          li.addEventListener('click', () => {
            li.style.color = 'blue'; // You can change this to any color
          });
  
          breedList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching dog breeds:', error));
  });
  
  // Challenge 4 - Filter breeds by starting letter

document.addEventListener('DOMContentLoaded', () => {
    const breedFilter = document.getElementById('breed-filter');
    
    // Fetch and display breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        const breedList = document.getElementById('breed-list');
        
        // Function to render breeds
        const renderBreeds = (breedsToRender) => {
          breedList.innerHTML = ''; // Clear the list before rendering
          breedsToRender.forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            breedList.appendChild(li);
          });
        };
  
        // Initial rendering of all breeds
        renderBreeds(breeds);
  
        // Event listener for the filter dropdown
        breedFilter.addEventListener('change', (event) => {
          const filterLetter = event.target.value;
          
          // Filter breeds based on selected letter
          const filteredBreeds = breeds.filter(breed => breed.startsWith(filterLetter));
          renderBreeds(filteredBreeds);
        });
      })
      .catch(error => console.error('Error fetching dog breeds:', error));
  });
  
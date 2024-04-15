// Function to toggle the navigation menu on small screens
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
  });

  //Function to handle for images
  document.addEventListener('DOMContentLoaded', function() {
    // Array of image URLs
    const imageUrls = [
        'images/pt1.jpg',
        'images/pt2.jpg',
        'images/pt3.jpg',
        'images/pt4.jpg',
        'images/pt5.jpg',
        'images/pt6.jpg',
        'images/pt7.jpg'
    ];

    // Get the container element where images will be displayed
    const container = document.getElementById('image-container');

    // Loop through the image URLs
    imageUrls.forEach(url => {
        // Create an img element
        const img = document.createElement('img');
        
        // Set the src attribute to the current image URL
        img.src = url;
        
        // Append the img element to the container
        container.appendChild(img);
    });
});
document.addEventListener('DOMContentLoaded', function() {
  // Array of image URLs
  const imageUrls = [
      'images/nc1.jpg',
      'images/nc2.jpg',
      'images/nc3.jpg',
      'images/nc4.jpg',
      'images/nc5.jpg',
      'images/nc6.jpg',
      'images/nc7.jpg',
      'images/nc8.jpg'
  ];

  // Get the container element where images will be displayed
  const container = document.getElementById('image-nutrition');

  // Loop through the image URLs
  imageUrls.forEach(url => {
      // Create an img element
      const img = document.createElement('img');
      
      // Set the src attribute to the current image URL
      img.src = url;
      
      // Append the img element to the container
      container.appendChild(img);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Array of image URLs
  const imageUrls = [
      'images/gc1.jpg',
      'images/gc2.jpg',
      'images/gc3.jpg',
      'images/gc4.jpg'
      
  ];

  // Get the container element where images will be displayed
  const container = document.getElementById('image-classes');

  // Loop through the image URLs
  imageUrls.forEach(url => {
      // Create an img element
      const img = document.createElement('img');
      
      // Set the src attribute to the current image URL
      img.src = url;
      
      // Append the img element to the container
      container.appendChild(img);
  });
});
  
  // Function to handle form submission
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    
    // Get form values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // You can perform validation here
    
    // Send form data to server (not implemented in this example)
    console.log('Name:', name);
    console.log('Phone:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    // Reset the form
    document.getElementById('contact-form').reset();
  });
  
    
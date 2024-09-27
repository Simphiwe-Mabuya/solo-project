var images = [
   '/images/surf3.jpg',
   '/images/museum1.jpg',
   '/images/food1.jpg'
  ];
  
  let element_image = document.getElementById('image');
  let currentIndex = 0;
  element_image.setAttribute("src", images[currentIndex]);
  
  document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next index, looping back to 0
    element_image.setAttribute("src", images[currentIndex]);
  });
  
  document.getElementById('previous').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to the previous index, looping back to the last
    element_image.setAttribute("src", images[currentIndex]);
  });
  
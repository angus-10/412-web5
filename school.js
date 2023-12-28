// var imageList = document.querySelectorAll(".grid div img")

// function displayImages(keyword) {
//     imageList.forEach(function (item, index, arr) {
//     if(!item.classList.contains(keyword))
//     item.style.display = "none";
// })
        
// }

// document.querySelectorAll('.grid .gallery-child').forEach(galleryChild => {
//     galleryChild.onclick = () => {
//         // Show the popup
//         document.querySelector('.popup-image').style.display = 'block';

//         // Set the source of the image inside the popup to the clicked galleryChild's image source
//         const clickedImage = galleryChild.querySelector('.image img');
//         document.querySelector('.popup-image img').src = clickedImage.getAttribute('src');
//     }
// });

// document.querySelector('.popup-image #x').onclick = () => {
//     // Hide the popup when the close button is clicked
//     document.querySelector('.popup-image').style.display = 'none';
// }


function showPopup(index) {
            var popup = document.getElementById('popup');
            var popupContent = document.getElementById('popup-content');
            var hiddenContent = document.getElementById('hidden-content-' + index);

            // Copy the content from the hidden container to the popup
            popupContent.innerHTML = hiddenContent.innerHTML;

            popup.style.display = 'block';
        }

        function closePopup() {
            var popup = document.getElementById('popup');
            popup.style.display = 'none';
        }

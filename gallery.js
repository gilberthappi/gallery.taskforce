
//data images
const galleryImages = [
    { imageSource: "./Images/image1.jpeg", name: "FENNEC FOX", place: "India" },
    { imageSource: "./Images/image2.jpeg", name: "HUMPBACK WHALE", place: "south africa" },
    { imageSource: "./Images/image3.jpeg", name: "COMMON,BROWN BABOON", place: "south africa" },
    { imageSource: "./Images/image4.jpeg", name: "SPOTTED DEER", place: "amazon" }
]
// generate card for each image
function generatePhotoGallery() {
    const galleryContainer = document.querySelector(".galleryContainer");
    galleryImages.forEach((item) => {
        const photoCard = document.createElement("div");
        photoCard.classList.add("photoCard");

        photoCard.innerHTML = `
    <img class="image" src="${item.imageSource}" alt="${item.name}" />
    <div class="overlay-body">
      <div class="image-details">
        <h2>${item.name.split(" ").join("<br>")}</h2>
        <small class="place">${item.place}</small>
        <span class="getDetails">
            <h5>Know More</h5>
            <span  class="material-symbols-outlined">arrow_forward</span>
        </span>
      </div>
    </div>`;
    
    galleryContainer.appendChild(photoCard);
    });
}


document.addEventListener("DOMContentLoaded", generatePhotoGallery);
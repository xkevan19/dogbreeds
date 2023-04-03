function generateImage() {
	const breed = document.getElementById("breed-list").value;
	if (breed) {
		const imageContainer = document.getElementById("image-container");
		imageContainer.innerHTML = "";
		const img = document.createElement("img");
		fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
			.then((response) => response.json())
			.then((imageData) => {
				img.src = imageData.message;
				img.alt = breed;
				// Add event listener to the image to redirect to the breed landing page
				img.addEventListener("click", () => {
					window.location.href = `https://en.wikipedia.org/wiki/${breed}`;
				});
			})
			.catch((error) => console.error(error));
		imageContainer.appendChild(img);
	}
}

  fetch("https://dog.ceo/api/breeds/list/all")
	.then((response) => response.json())
	.then((data) => {
	  const breeds = Object.keys(data.message);
	  const breedList = document.getElementById("breed-list");
	  breedList.innerHTML = '<option value="">Select a breed</option>';
	  breeds.forEach((breed) => {
		const option = document.createElement("option");
		option.value = breed;
		option.text = breed[0].toUpperCase() + breed.slice(1);
		breedList.appendChild(option);
	  });
	})
	.catch((error) => console.error(error));
  
fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(data => {
  const breedList = document.getElementById('breed-list');
  for (const breed in data.message) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const link = document.createElement('a');
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(imageData => {
        img.src = imageData.message;
        img.alt = breed;
      })
      .catch(error => console.error(error));
    span.textContent = breed;
    link.href = `https://en.wikipedia.org/wiki/${breed}`; // set the href attribute to the breed's landing page
    link.appendChild(img);
    link.appendChild(span);
    li.appendChild(link);
    breedList.appendChild(li);
  }
})
.catch(error => console.error(error));

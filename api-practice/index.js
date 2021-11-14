let photo = document.getElementById("photo");

function getImage() {
  let key = "IHFta3UAH3C9MQNFdqfnPtzvOydSCRKuqO6VM_3Fzhw";
  let uri = `https://api.unsplash.com/photos/random/?client_id=${key}`;

  fetch(uri)
    .then((data) => {
      console.log("yayy");
      return data.json();
    })
    .then((jsonData) => {
      console.log(jsonData);
      photo.src = jsonData.urls.regular;
    });
}

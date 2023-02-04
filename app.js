const inputFile = document.querySelector("#file");
const pictureImage = document.querySelector(".content");


inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

    //   pictureImage.style.backgroundImage = readerTarget.result;
      const img = document.createElement("img");
      img.src = readerTarget.result;

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});
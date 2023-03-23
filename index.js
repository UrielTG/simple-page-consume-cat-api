/* This is a query selector. It is selecting the element with the id of generate-btn and cat-image. */
const generateBtn = document.querySelector("#generate-btn");
const catImage = document.querySelector("#cat-image");

/* An event listener. It is listening for a click event on the generateBtn element. When the click
event is triggered, it will execute the code inside the function. */
generateBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://cataas.com/cat");
    if (!response.ok) {
      throw new Error("La conexión con la API falló");
    }

    /*
      The Blob object allows creating and manipulating binary data in the browser's memory.
      Binary data can be of any type, such as text, images, video, audio, etc.
      The Blob object is mainly used to read or write binary data to a storage, to send data through a
      storage, to send data over a network connection or to store data in the browser cache.
      in the browser cache.
    */

    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    catImage.src = objectURL;
  } catch (error) {
    console.error("Error:", error);
  }
});

function getDogImage() { // Send an AJAX request to the Dog API
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.send();

    // Handle the response
    xhr.onload = function () {
        if (xhr.status === 200) { // Extract the image URL from the response
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            var imageUrl = response.message;
            console.log(imageUrl);

            // Create an image element and set its src to the image URL
            var image = document.createElement("img");
            image.src = imageUrl;

            // Add the image to the HTML page
            document.getElementById("dog-images").appendChild(image);
        } else {
            console.error("An error occurred: " + xhr.status);
        }
    };
};
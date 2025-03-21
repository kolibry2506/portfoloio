/*Name this external file gallery.js*/

function upDate(previewPic) {
    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src +"')";
}

function unDo() {
    document.getElementById("image").innerHTML = 'Hover over an image';
    document.getElementById("image").style.backgroundImage = "url('')";
}

currentImages = document.querySelectorAll("img")
for (let i = 0; i<currentImages.length; i++) {
    console.log("Image "+ i)
    currentImages[i].setAttribute("tabindex","0")
}
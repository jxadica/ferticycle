
document.addEventListener("DOMContentLoaded", () => {
    const img2 = document.querySelector(".img2 img");
    console.log(img2);
    
    if (img2) {
        img2.addEventListener("click", () => {
            window.location.href = "product.html";
            console.log("5678"); 
        });
    } else {
        console.error("Image with class 'img2' not found!");
    }
});

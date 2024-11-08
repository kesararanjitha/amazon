const image = document.querySelectorAll('.images ul img');
const next_but = document.querySelector('.Next');
const prev_but = document.querySelector('.previous'); // Make sure this matches your actual HTML
let n = 0; // Move the declaration to the top for global scope

function changepath() {
    for (let i = 0; i < image.length; i++) {
        image[i].style.display = 'none';
    }
    image[n].style.display = 'block';
}

// Initial display setup
changepath();

// Event listeners for buttons
prev_but.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = image.length - 1;
    }
    changepath();
})
next_but.addEventListener("click", (e) => {
    if (n < image.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changepath();
});

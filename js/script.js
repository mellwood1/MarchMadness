

const yearSpan = document.getElementById("year");

yearSpan.textContent = new Date().getFullYear();



const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
};


// Scroll back to top when button clicked
topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Footer return to top button
const footerTopBtn = document.getElementById("footerTopBtn");

if (footerTopBtn) {
    footerTopBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}




const countdownElement = document.getElementById("countdown");

if (countdownElement) {

    // Set future tournament date
    const tournamentDate =
        new Date("March 15, 2027 00:00:00").getTime();

    setInterval(function () {

        const now = new Date().getTime();

        const distance = tournamentDate - now;

        // Time calculations
        const days = Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) / 1000
        );

        // Display countdown
        countdownElement.innerHTML =
            days + "d " +
            hours + "h " +
            minutes + "m " +
            seconds + "s";

    }, 1000);
}




let slideIndex = 0;

const slides =
    document.getElementsByClassName("slide");

function showSlides() {

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }

    slideIndex++;

    // Restart slideshow
    if (slideIndex > slides.length) {

        slideIndex = 1;
    }

    // Show current slide
    if (slides.length > 0) {

        slides[slideIndex - 1].style.display = "block";
    }

    // Change image every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start slideshow
showSlides();
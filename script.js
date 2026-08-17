console.log("Gyaankriya JavaScript connected!");


// ===============================
// GET STARTED BUTTON
// ===============================

const getStartedBtn =
    document.getElementById("getStartedBtn");

if (getStartedBtn) {

    getStartedBtn.addEventListener("click", function () {

        window.location.href = "Explore.html";

    });

}


// ===============================
// EDUCATION LEVEL CARDS
// ===============================

const levelCards =
    document.querySelectorAll(".card[data-level]");

levelCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const level =
            card.getAttribute("data-level");

        alert("You selected: " + level);

    });

});

/* ================= GYAANKRIYA STORY SLIDER ================= */

const storySlides =
    document.querySelectorAll(".story-slide");

let currentStory = 0;


function showStory(index) {

    storySlides.forEach(function(slide) {

        slide.classList.remove("active");

    });

    storySlides[index].classList.add("active");
}


function nextStory() {

    currentStory++;

    if (currentStory >= storySlides.length) {

        currentStory = 0;

    }

    showStory(currentStory);

}


/* Change story every 5 seconds */

setInterval(nextStory, 5000);
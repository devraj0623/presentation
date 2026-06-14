const hobbies = [
    {
        text: "Fitness Freak",
        image: "https://i.ibb.co/FLXKWK3x/Sameer.jpg"
    },
    {
        text: "Tend to be closed with nature.",
        image: "https://www.image2url.com/r2/default/images/1781435772864-58f52827-9a3a-4ad8-a033-097e6a50a5e8.png"
    },

  {
        text: "Love Playing cricket",
        image: "https://www.image2url.com/r2/default/images/1781436202717-e67497ac-02e8-441d-beef-9f2389f567e8.png"
    },
  
];

let currentIndex = 0;

const hobbyText = document.getElementById("hobby-text");
const galleryImg = document.getElementById("gallery-img");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function () {
    currentIndex++;

    // Loop back to the first hobby when reaching the end
    if (currentIndex >= hobbies.length) {
        currentIndex = 0;
    }

    hobbyText.innerHTML = `<p>${hobbies[currentIndex].text}</p>`;
    galleryImg.src = hobbies[currentIndex].image;
});
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }

});
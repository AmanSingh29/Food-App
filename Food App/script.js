const bell = document.querySelector(".bell");
const search = document.querySelector("#inputSearch");
const disscountText = document.querySelector(".dis-text");
const arr = ["chicken tikka masala", "samosa chaat", "masala dosa"];
const disscountArr = [
  "40% off on order above Rs. 600",
  "60% off on order above Rs. 1200",
];
let disIn = 1;
let i = 1;
const filter = document.querySelector(".filter-cont");
const dropdown = document.querySelector(".dropdown");

const changeBell = function () {
  const bellAttribute = bell.getAttribute("src");
  bell.setAttribute(
    "src",
    `${
      bellAttribute == "Images/bell1.png"
        ? "Images/bell2.png"
        : "Images/bell1.png"
    }`
  );
};

bell.addEventListener("click", changeBell);

setInterval(function () {
  search.setAttribute("placeholder", `${arr[i]}`);
  if (i < 2) {
    i++;
  } else {
    i = 0;
  }
}, 2000);

setInterval(function () {
  disscountText.textContent = disscountArr[disIn];
  if (disIn < 1) {
    disIn++;
  } else {
    disIn = 0;
  }
}, 2500);

// =================================================

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");

  if (slideIndex >= slides.children.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.children.length - 1;
  }

  slides.style.transform = `translateX(${-slideIndex * 100}%)`;

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  dots[slideIndex].classList.add("active");
  slideIndex++;
}

function currentSlide(index) {
  slideIndex = index;
  showSlides();
}

setInterval(showSlides, 2000);

// =================================================

let filterText = document.querySelector(".filter-text");
filterText.textContent = "Filter By";

filter.addEventListener("click", function () {
  if (dropdown.style.display == "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});

const filterItems = document.querySelectorAll(".dropdown-items");
for (let index = 0; index < filterItems.length; index++) {
  const element = filterItems[index];
  element.addEventListener("click", function () {
    filterText.textContent = element.textContent;
  });
}

// =================================================

const langText = document.querySelector(".lang-text");
langText.textContent = "En";
const langDrop = document.querySelector(".lang-drop");
langDrop.style.display = "none";
langDrop.textContent = "Hn";

const langDropCont = document.querySelector(".lang-dropdown");

langDropCont.addEventListener("click", function () {
  if (langDrop.style.display == "none") {
    langDrop.style.display = "block";
  } else {
    langDrop.style.display = "none";
  }
});

langDrop.addEventListener("click", function () {
  langText.textContent = `${langText.textContent == "En" ? "Hn" : "En"}`;
  langDrop.textContent = `${langDrop.textContent == "Hn" ? "En" : "Hn"}`;
});

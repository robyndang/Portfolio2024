// /*CASE-HOVER EFFECT*/
const caseHoverElements = document.querySelectorAll(".case-hover");

caseHoverElements.forEach((element) => {
  let isHovered = false;
  const thumbnail = element.querySelector(".cs-thumbnail img");
  const h2Element = element.querySelector("h2");

  element.addEventListener("mouseenter", () => {
    if (!isHovered) {
      thumbnail.style.transition = "transform 0.7s";
      thumbnail.style.transform = "scale(1.05)";
      h2Element.style.transition = "letter-spacing 0.4s, color 0.4s";
      h2Element.style.letterSpacing = "0.05em";
      h2Element.style.color = "rgb(40, 42, 43)";
      isHovered = true;
    }
  });

  element.addEventListener("mouseleave", () => {
    if (isHovered) {
      thumbnail.style.transition = "transform 0.7s";
      thumbnail.style.transform = "scale(1)";
      h2Element.style.transition = "letter-spacing 0.4s, color 0.4s";
      h2Element.style.letterSpacing = "";
      h2Element.style.color = "";
      isHovered = false;
    }
  });
});

/*LINK ACTIVE WHEN ON PAGE*/
// Get the "Work" link element
const workLink = document.querySelector("a.active");

// Check if the "Work" link has the class "active"
if (workLink) {
  // Set font color to rgb(40, 42, 43)
  workLink.style.color = "rgb(40, 42, 43)";
  workLink.style.position = "relative";
  workLink.style.overflow = "hidden";

  // Create a pseudo-element for the underline effect
  const underline = document.createElement("span");
  underline.style.position = "absolute";
  underline.style.bottom = "0";
  underline.style.left = "0";
  underline.style.width = "100%"; // Set initial width to 100%
  underline.style.height = "1px"; // Adjust the height value as desired
  underline.style.backgroundColor = "rgb(40, 42, 43)";
  underline.style.transform = "scaleX(0)"; // Set initial width to 0
  underline.style.transformOrigin = "left"; // Set the transform origin to the left
  underline.style.transition = "transform 0.4s";
  workLink.appendChild(underline);

  // Set the width of the underline to match the content width
  setTimeout(() => {
    underline.style.transform = "scaleX(1)"; // Set width to 100%
  }, 0);
}

/*HOVER EFFECT FOR LINKS*/
// Get all <a> elements inside <ul> with class "hover" and <a> elements in the dropdown menu
const elements = document.querySelectorAll(
  "ul.hover a, div.hover a, div.hover h3"
);

// Attach event listeners to each element
elements.forEach((element) => {
  let originalColor; // Variable to store the original color

  // Add event listener for mouseenter (hover)
  element.addEventListener("mouseenter", function () {
    // Check if the element has the "active" class
    if (this.classList.contains("active")) {
      return; // Exit the function and do not apply hover effects
    }

    // Store the original color
    originalColor = this.style.color;

    // Set font color to rgb(40, 42, 43)
    this.style.color = "rgb(40, 42, 43)";
    // Create a pseudo-element for the underline effect
    const underline = document.createElement("span");
    underline.style.position = "absolute";
    underline.style.bottom = "0";
    underline.style.left = "0";
    underline.style.width = "100%"; // Set initial width to 100%
    underline.style.height = "1px"; // Adjust the height value as desired
    underline.style.backgroundColor = "rgb(40, 42, 43)";
    underline.style.transform = "scaleX(0)"; // Set initial width to 0
    underline.style.transformOrigin = "left"; // Set the transform origin to the left
    underline.style.transition = "transform 0.4s";
    this.style.position = "relative";
    this.style.overflow = "hidden";
    this.appendChild(underline);
    // Set the width of the underline to match the content width
    setTimeout(() => {
      underline.style.transform = "scaleX(1)"; // Set width to 100%
    }, 0);
  });

  // Add event listener for mouseleave (hover off)
  element.addEventListener("mouseleave", function () {
    // Check if the element has the "active" class
    if (this.classList.contains("active")) {
      return; // Exit the function and do not apply hover effects
    }

    // Reset font color to the original color
    this.style.color = originalColor;

    // Remove the underline pseudo-element
    const underline = this.querySelector("span");
    if (underline) {
      this.removeChild(underline);
    }
  });
});

// Set the initial hover styles for the active link in the dropdown menu
const activeLinks = document.querySelectorAll(
  "ul.hover a.active, div.hover a.active"
);
activeLinks.forEach((activeLink) => {
  activeLink.style.color = "rgb(40, 42, 43)";
  const underline = document.createElement("span");
  underline.style.position = "absolute";
  underline.style.bottom = "0";
  underline.style.left = "0";
  underline.style.width = "100%";
  underline.style.height = "1px";
  underline.style.backgroundColor = "rgb(40, 42, 43)";
  underline.style.transform = "scaleX(1)";
  underline.style.transformOrigin = "left";
  underline.style.transition = "none";
  activeLink.style.position = "relative";
  activeLink.style.overflow = "hidden";
  activeLink.appendChild(underline);
});

// HOVER EFFECT FOR NEXT CASE STUDY ARROW //
const h3Element = document.querySelector(".next-case-study h3");
const arrowIcon = document.querySelector(".next-case-study .arrow-icon img");

h3Element.addEventListener("mouseover", function () {
  arrowIcon.style.filter = "brightness(0.3)"; // Change the color or effect as needed
});

h3Element.addEventListener("mouseout", function () {
  arrowIcon.style.filter = "brightness(1)"; // Reset back to original color
});

// SMOOTH SCROLL WHEN MOVING TO DIFFERENT PARTS OF A PAGE
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      duration: 400,
    });
  });
});

//CAROUSEL
const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button-right");
const prevButton = document.querySelector(".carousel_button-left");
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.querySelectorAll(".carousel_indicator"));

const slideWidth = slides[0].getBoundingClientRect().width;
const slideCount = slides.length;

// Set initial slide position
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

// Function to move to a specific slide
const moveToSlide = (currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// Function to update the current dot
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

// Function to show/hide the left button based on the current slide
const toggleLeftButtonVisibility = () => {
  const currentSlide = track.querySelector(".current-slide");
  const isFirstSlide = currentSlide === slides[0];

  if (isFirstSlide) {
    prevButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
  }
};

// Initially hide the left button when the page loads
toggleLeftButtonVisibility();

// When I click right, move slides to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const currentIndex = slides.indexOf(currentSlide);
  const nextIndex = (currentIndex + 1) % slideCount;
  const nextSlide = slides[nextIndex];
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = dots[nextIndex];

  moveToSlide(currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  toggleLeftButtonVisibility();
});

// When I click left, move slides to the left
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const currentIndex = slides.indexOf(currentSlide);
  const prevIndex = (currentIndex - 1 + slideCount) % slideCount;
  const prevSlide = slides[prevIndex];
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = dots[prevIndex];

  moveToSlide(currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  toggleLeftButtonVisibility();
});

// when I click the nav indicators, move to that slide
dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const targetIndex = dots.indexOf(targetDot);
  const targetSlide = slides[targetIndex];
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");

  moveToSlide(currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  toggleLeftButtonVisibility();
});

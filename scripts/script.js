/*NAVIGATION MENU*/
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    document.querySelector(".navbar").style.transform = "translateY(-100%)";
  } else {
    document.querySelector(".navbar").style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const navbarLink = document.querySelector(".navbar-link");
const dropdownMenu = document.querySelector(".dropdown-menu");

navbarLink.addEventListener("mouseenter", function () {
  dropdownMenu.classList.add("active");
});

dropdownMenu.addEventListener("mouseenter", function () {
  dropdownMenu.classList.add("active");
});

dropdownMenu.addEventListener("mouseleave", function () {
  dropdownMenu.classList.remove("active");
});

// ACTIVE PAGE
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current HTML page name
    const navTexts = document.querySelectorAll('.nav-text'); // Select all elements with class 'nav-text'
    const dropdownLinks = document.querySelectorAll('.dropdown-list a'); // Select all <a> elements inside dropdown-list
    const menuItems = document.querySelectorAll('.menu-item a');
    
    navTexts.forEach(navText => {
        if (navText.parentElement.href.includes(currentPage)) { // Check if the href of the parent element contains the current page name
            navText.style.color = 'var(--link)'; // Change the color of nav-text to var(--link)
        }
    });

    dropdownLinks.forEach(link => {
        if (link.href.includes(currentPage)) { // Check if the href contains the current page name
            link.style.color = 'var(--link)'; // Change the color of link to var(--link)
        }
    });

        menuItems.forEach(link => {
        if (link.href.includes(currentPage)) { // Check if the href contains the current page name
            link.style.color = 'var(--link)'; // Change the color of link to var(--link)
        }
    });
});

/*SIDE MENU HOVER*/
document.addEventListener('DOMContentLoaded', function () {
    const menuButtonLinks = document.querySelectorAll('.cs-side-menu-button a'); // Select all links in cs-side-menu-button

    // Function to check which section is in the viewport
    function handleScroll() {
        menuButtonLinks.forEach(link => {
            const sectionId = link.getAttribute('href');
            const section = document.querySelector(sectionId);

            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    link.style.color = 'var(--link)'; // Change color to var(--link)
                } else {
                    link.style.color = ''; // Reset color to default
                }
            }
        });
    }

    // Function to handle hover event
    function handleHover(event) {
        if (event.type === 'mouseenter') {
            event.target.style.color = 'var(--stone)'; // Change color to var(--stone) on hover
        } else if (event.type === 'mouseleave') {
            handleScroll(); // Reapply scroll logic on mouse leave
        }
    }

    // Attach scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Attach hover event listeners to menuButtonLinks
    menuButtonLinks.forEach(link => {
        link.addEventListener('mouseenter', handleHover);
        link.addEventListener('mouseleave', handleHover);
    });

    // Initial scroll check
    handleScroll();
});

/*HAMBURGER MENU */
function closeMenu() {
  document.getElementById("hamburgermenu").style.height = "0%";
  document.getElementById("hamburgerbtn").style.display = "block";
}

function openMenu() {
  document.getElementById("hamburgermenu").style.height = "100%";
  document.getElementById("hamburgerbtn").style.display = "none";
}

/* PARALLAX BACKGROUND */
document.addEventListener("mousemove", parallax);

function parallax(e) {
  // Get the position of the "Email" link
  const emailLink = document.querySelector(
    'li a[href="mailto:robyn.l.dang@gmail.com"]'
  );
  const emailLinkRect = emailLink.getBoundingClientRect();
  const emailLinkX = emailLinkRect.left + emailLinkRect.width / 2;
  const emailLinkY = emailLinkRect.top + emailLinkRect.height / 2;

  this.querySelectorAll("#monet .layer").forEach((layer) => {
    const speed = parseFloat(layer.getAttribute("data-speed"));

    // Calculate the X translation based on the cursor position relative to the "Email" link
    const x = ((emailLinkX - e.pageX) * speed) / 100;

    // Calculate the Y translation based on the cursor position relative to the "Email" link
    const y = ((emailLinkY - e.pageY) * speed) / 100;

    // Apply translations on the X and Y axes only for the images inside the #monet div
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
}

/*SET DEFAULT VIDEO SPEED TO 1.25X*/
  document.addEventListener('DOMContentLoaded', function() {
    // Select all iframes within .responsive-iframe
    const iframes = document.querySelectorAll('.responsive-iframe iframe');

    iframes.forEach(iframe => {
      // Create a new Vimeo Player instance
      const player = new Vimeo.Player(iframe);

      // Set the playback speed to 1.25x
      player.setPlaybackRate(1.25).then(function(speed) {
        console.log(`Playback speed set to ${speed}`);
      }).catch(function(error) {
        console.error(`Failed to set playback speed: ${error.name}`);
      });
    });
  });

/*HOVER EFFECT*/
document.addEventListener('DOMContentLoaded', function () {
    const hoverDivs = document.querySelectorAll('.hover');

    hoverDivs.forEach(hoverDiv => {
        const elements = hoverDiv.querySelectorAll('svg, span, a, p, h1, h2, h3, h4');

        hoverDiv.addEventListener('mouseenter', () => {
            elements.forEach(el => {
                el.style.transition = 'color 300ms ease, fill 300ms ease';

                if (el.tagName.toLowerCase() === 'svg') {
                    el.querySelectorAll('path').forEach(path => {
                        const currentFill = getComputedStyle(path).fill;
                        if (currentFill === 'rgb(32, 32, 32)' || currentFill === '#202020') {
                            path.dataset.originalFill = currentFill;
                            path.style.fill = 'var(--link)';
                        } else if (currentFill === 'rgb(255, 255, 255)') {
                            path.dataset.originalFill = currentFill;
                            path.style.fill = 'var(--black)';
                        }
                    });
                } else {
                    const currentColor = getComputedStyle(el).color;

                    if (currentColor === 'rgb(32, 32, 32)') { // black
                        el.dataset.originalColor = 'black';
                        el.style.color = 'var(--link)';
                    } else if (currentColor === 'rgb(255, 255, 255)') { // white
                        el.dataset.originalColor = 'white';
                        el.style.color = 'var(--black)';
                    }
                }
            });
        });

        hoverDiv.addEventListener('mouseleave', () => {
            elements.forEach(el => {
                el.style.transition = 'color 300ms ease, fill 300ms ease';

                if (el.tagName.toLowerCase() === 'svg') {
                    el.querySelectorAll('path').forEach(path => {
                        const originalFill = path.dataset.originalFill;
                        if (originalFill) {
                            path.style.fill = originalFill;
                        }
                    });
                } else {
                    const originalColor = el.dataset.originalColor;

                    if (originalColor === 'black') {
                        el.style.color = 'var(--black)';
                    } else if (originalColor === 'white') {
                        el.style.color = 'var(--white)';
                    }
                }
            });
        });

        // Handling additional hover effects for specific colors
        hoverDiv.addEventListener('mouseenter', () => {
            elements.forEach(el => {
                if (getComputedStyle(el).color === 'rgb(93, 130, 67)') { // example color check
                    el.dataset.originalColor = 'link';
                    el.style.color = 'var(--brand)';
                    if (el.tagName.toLowerCase() === 'svg') {
                        el.querySelectorAll('path').forEach(path => {
                            path.style.fill = 'var(--brand)';
                        });
                    }
                }
            });
        });

        hoverDiv.addEventListener('mouseleave', () => {
            elements.forEach(el => {
                if (el.dataset.originalColor === 'link') {
                    el.style.color = 'var(--link)';
                    if (el.tagName.toLowerCase() === 'svg') {
                        el.querySelectorAll('path').forEach(path => {
                            path.style.fill = 'var(--link)';
                        });
                    }
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const hoverContainers = document.querySelectorAll('.image-container.hover');

  hoverContainers.forEach(container => {
    const img = container.querySelector('img');

    if (img) {
      container.addEventListener('mouseenter', () => {
        img.style.transition = 'transform 300ms ease';
        img.style.transform = 'scale(1.02)';
      });

      container.addEventListener('mouseleave', () => {
        img.style.transition = 'transform 300ms ease';
        img.style.transform = 'scale(1)';
      });
    }
  });
});




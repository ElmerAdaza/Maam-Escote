// side bar start
function openNav() {
  "use strict";
  const sidepanel = document.getElementById("mySidepanel");
  if (sidepanel) {
    sidepanel.style.left = "0";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

function closeNav() {
  "use strict";
  const sidepanel = document.getElementById("mySidepanel");
  if (sidepanel) {
    sidepanel.style.left = "-320px";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

function toggleCollapse(elementId) {
  var element = document.getElementById(elementId);
  var button = document.querySelector(".collapse_btn a");

  // Toggle the 'show' class
  element.classList.toggle("show");

  // Toggle aria-expanded attribute
  var isExpanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", !isExpanded);
}

// right-sidebar
function open_right_side() {
  "use strict";
  const sidepanel = document.getElementById("right_side");
  if (sidepanel) {
    sidepanel.style.right = "0";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

function close_right_sade() {
  "use strict";
  const sidepanel = document.getElementById("right_side");
  if (sidepanel) {
    sidepanel.style.right = "-355px";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  const scrollToTopBtn = document.documentElement || document.body;
  scrollToTopBtn.scrollIntoView({
    behavior: "smooth",
  });
}

// learnedText learning tab
function open_info(evt, cityName) {
  var i, tabcontent, tablinks;

  // Hide all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove active class from all tab links
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the selected tab content and mark the corresponding tab link as active
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// button back to top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  const scrollToTopBtn = document.documentElement || document.body;
  scrollToTopBtn.scrollIntoView({
    behavior: "smooth",
  });
}

// footer validation start
const fom = document.getElementById("footer-form");
const footerMessage = document.getElementById("footer-message");

fom.addEventListener("submit", (event) => {
  event.preventDefault();
  footerMessage.innerHTML = "~ Form submitted success fully!";
  footerMessage.style.display = "flex";
  fom.reset();
  setTimeout(() => {
    footerMessage.style.display = "none";
  }, 3000);
});
// footer validation end

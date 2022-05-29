const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function manageClass() {

  //Buttons
  for (var i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function(){
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
      this.className += " active-btn"
    })
  } //@dev This loop manages the classes of the icons

  //Sections
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id
    if (id) {

      sectBtns.forEach((section) => {
        section.classList.remove("active")
      }); //@dev This forEach removes the active class from section buttons
      e.target.classList.add("active")

      sections.forEach((sect) => {
        sect.classList.remove("active");
      }); //@dev This forEach hides the sections from which it removes the active class

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  }); //@dev This function manages classes of the sections

  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  })
} //@dev This function manages classes of different parts of the page

manageClass();

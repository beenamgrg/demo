// service bubble fade up animation

const sbUpObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add a delay based on the index of the element
      const delay = 200 * index;
      setTimeout(() => {
        entry.target.classList.add("sb-up-fade-show");
      }, delay);
    } else {
      entry.target.classList.remove("sb-up-fade-show");
    }
  });
});

const sbUpElement = document.querySelectorAll(".sb-up-fade-hdn");
sbUpElement.forEach((el) => sbUpObserver.observe(el));

//Left fade animation script
const leftObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("l-fade-show");
    } else {
      entry.target.classList.remove("l-fade-show");
    }
  });
});

const hiddenleftDetailElement = document.querySelectorAll(".l-fade-hdn");
hiddenleftDetailElement.forEach((el) => leftObserver.observe(el));

//Right fade animation script
const rightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("r-fade-show");
    } else {
      entry.target.classList.remove("r-fade-show");
    }
  });
});

const hiddenRightDetailElement = document.querySelectorAll(".r-fade-hdn");
hiddenRightDetailElement.forEach((el) => rightObserver.observe(el));

//Up fade animation script
const upObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("up-fade-show");
    } else {
      entry.target.classList.remove("up-fade-show");
    }
  });
});

const hiddenUpDetailElement = document.querySelectorAll(".up-fade-hdn");
hiddenUpDetailElement.forEach((el) => upObserver.observe(el));

const pupMemObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const popUpBanner = document.getElementById("popup_banner");
    const popUpButton = document.getElementById("popup_banner_btn");
    if (
      entry.isIntersecting &&
      !popUpBanner.classList.contains("pup-mem-show")
    ) {
      popUpBanner.classList.add("pup-mem-show");
      popUpButton.classList.add("pup-btn-show");
      pupMemObserver.unobserve(entry.target);
    }
  });
});

const popupHiddenElement = document.querySelectorAll(".pup-mem-hdn");
popupHiddenElement.forEach((el) => pupMemObserver.observe(el));

// products
const prodObj = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add a delay based on the index of the element
      setTimeout(() => {
        entry.target.classList.add("sb-up-fade-show-hdd");
      }, 500);
    } else {
      entry.target.classList.remove("sb-up-fade-show-hdd");
    }
  });
});

const prodPage = document.querySelectorAll(".sb-up-fade-hdn-hdd-d");
prodPage.forEach((el) => prodObj.observe(el));

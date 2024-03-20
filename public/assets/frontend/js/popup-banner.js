let popupBanner = document.getElementById("popup_banner");
let alreadyCLosed = 0;
function handlePopupShow() {
  popupBanner.classList.add("show-popup-banner");
}

function handlePopupClose() {
  alreadyCLosed = 1;
  popupBanner.classList.remove("show-popup-banner");
  popupBanner.classList.remove("pup-mem-show");
  document.getElementById("popup-banner-btn").style.display = "block";
}

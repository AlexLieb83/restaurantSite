//alert success/failure box
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has("success")) {
    alert("Reservation Successful");
  } else if (urlParams.has("error")) {
    alert(
      "There has been an error with this reservation. Please give us a call at 555-555-5555",
    );
  }
};

// tab menu
function openMenu(event, menuName) {
  let tabsArray = document.getElementsByClassName("menu");
  for (let i = 0; i < tabsArray.length; i++) {
    tabsArray[i].style.display = "none";
  }

  let tabLinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active-tab");
  }

  document.getElementById(menuName).style.display = "block";
  event.currentTarget.classList.add("active-tab");
}

document.getElementById("mainLink").click();

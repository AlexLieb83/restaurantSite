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

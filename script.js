// tab menu
function openMenu(event, menuName) {
  let tabsArray = document.getElementsByClassName("menu");
  tabsArray.forEach((tab) => {
    tab.style.display = "none";
  });

  let tabLinks = document.getElementsByClassName("tablink");
  tabLinks.forEach((tab) => {
    tab.classlist.remove("active-tab");
  });
}

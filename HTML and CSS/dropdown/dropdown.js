document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches(".dropdown-button");
  // User clicks on dropdown area but is not the dropdown button
  // so do not close the dropwdown (Do nothing)
  if (!isDropdownButton && e.target.closest(".dropdown") !== null) {
    console.log("Click on dropdown area but not the dropdown button");
    return; // Exit the event handler
  }

  // User clicks on dropdown button so save and open the current drowpdown
  let currentDropdown;
  if (isDropdownButton) {
    console.log("Click on dropdown button");
    currentDropdown = e.target.closest(".dropdown");
    currentDropdown.classList.toggle("active");
  }

  // Close all dropdown less the current dropdown
  const dropdowns = document.querySelectorAll(".dropdown.active");
  dropdowns.forEach((dropdown) => {
    if (dropdown === currentDropdown) return; // Exit the current iteration
    dropdown.classList.remove("active");
  });
});

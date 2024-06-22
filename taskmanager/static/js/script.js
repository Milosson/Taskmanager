document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });

  // date picker
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmmm, yyyy",
    i18n: {done: "Select"}
  });

  // select initialization
  let selects = document.querySelectorAll('select');
  M.FormSelect.init(selects);

// collapsible initialization
let collapsibles = document.querySelectorAll('.collapsible');
M.Collapsible.init(collapsibles);


// Delete confirmation function
function confirmDelete(actionType) {
  var message = "";
  if (actionType === "task") {
      message = "This action will delete this task, are you sure?";
  } else if (actionType === "category") {
      message = "This action will delete this category, are you sure?";
  } else {
      message = "Are you sure you want to proceed?";
  }

  return confirm(message);
}

console.log("Your index.js file is loaded correctly!");

// Wait for window load

function fade() {
  $('.loader').fadeOut("slow");
  }
  setTimeout(fade, 3000);

/* Toggle for Hamburger Menu */
function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
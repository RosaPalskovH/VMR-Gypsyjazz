

/*src: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp */

//Get the button:
mybutton = document.getElementById("scroll-up");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

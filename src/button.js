
window.onload = function() {
  var buttons = document.querySelector('.button');
  initializeButtons = function() {
    for(var i = 0; i < buttons.length; i++) {
      console.log(buttons)

      buttons[i].addEventListener("click", function() {
        this.style.backgroundColor = 'red'
        console.log(this.style.backgroundColor)
      })
    }
  }
  initializeButtons()
};

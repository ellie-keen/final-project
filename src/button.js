window.onload = function() {

  var buttons = document.querySelectorAll('.button');

  var initializeButtons = function() {
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        this.style.backgroundColor = 'red'
      })
    }
  }
    initializeButtons()

  };

  window.onload = function () {
    document.body.classList.add('lds-dual-ring');
    window.setTimeout(function () {
      document.body.classList.remove('lds-dual-ring');
			document.querySelector(".container").style.display = "block"
    }, 500);
  }

function topFunction() {
  document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

window.onscroll = function() {hideFunction()};

function hideFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    document.getElementById("topBtn").style.display = "block";
  else {
    document.getElementById("topBtn").style.display = "none";
  }
}


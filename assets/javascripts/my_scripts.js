function w3_open() {
    document.getElementById("mySidenav").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidenav").style.display = "none";
}



function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(21.027340, 105.829410),
    zoom: 10
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

// DEFINE openSection
function openSection(evt, sectionName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("sections");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-bottombar w3-border-teal", "");
  }
  document.getElementById(sectionName).style.display = "block";
  evt.currentTarget.className += " w3-bottombar w3-border-teal";
}

var PhotoIndex = 1;
showDivs(PhotoIndex);

function plusDivs(n) {
  showDivs(PhotoIndex += n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("myPhotoSlides");
    if (n > x.length) {PhotoIndex = 1}
    if (n < 1) {PhotoIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    x[PhotoIndex-1].style.display = "block";
  }
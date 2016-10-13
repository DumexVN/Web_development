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

 function Tab(play) {
    var uuuu;
    var tyt = document.getElementsByClassName("Ani");
    for (uuuu = 0; uuuu < tyt.length; uuuu++) {
       tyt[uuuu].style.display = "none";
    }
    document.getElementById(play).style.display = "block";
}


  /*Photos PC*/

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

  /*Photos Phone*/

  var PhottoIndex = 1;
  showsDivs(PhottoIndex);

  function plussDivs(y) {
   showsDivs(PhottoIndex += y);
   }

   function showsDivs(y) {
     var a;
     var z = document.getElementsByClassName("myPhotoSlidess");
     if (y > z.length) {PhottoIndex = 1}
     if (y < 1) {PhottoIndex = z.length}
     for (a = 0; a < z.length; a++) {
        z[a].style.display = "none";
     }
     z[PhottoIndex-1].style.display = "block";
   }

  /* Certificates PC*/

  var CertIndex = 1;
  showCert(CertIndex);

  function addDivs(p) {
   showCert(CertIndex += p);
   }

   function showCert(p) {
     var mnm;
     var qqq = document.getElementsByClassName("myCerti");
     if (p > qqq.length) {CertIndex = 1}
     if (p < 1) {CertIndex = qqq.length}
     for (mnm = 0; mnm < qqq.length; mnm++) {
        qqq[mnm].style.display = "none";
     }
     qqq[CertIndex-1].style.display = "block";
   }

   function Igcse(){
     if (document.getElementById("Grades").style.display=='none'){
       document.getElementById("Grades").style.display='block'}
       else {document.getElementById("Grades").style.display='none'}
   }

   /* Certificates iPhone*/

   var CertificateIndex = 1;
   showCertificate(CertificateIndex);

   function AddsDivs(nom) {
    showCertificate(CertificateIndex += nom);
    }

    function showCertificate(nom) {
      var pom;
      var lom = document.getElementsByClassName("myCertis");
      if (nom > lom.length) {CertificateIndex = 1}
      if (nom < 1) {CertificateIndex = lom.length}
      for (pom = 0; pom < lom.length; pom++) {
         lom[pom].style.display = "none";
      }
      lom[CertificateIndex-1].style.display = "block";
    }

function EulerOn(){
  if (document.getElementById("Euler").style.display=="block"){
    document.getElementById("Euler").style.display="none";
  }
  else {document.getElementById("Euler").style.display="block";}
}


function WebsiteOn(){
  if (document.getElementById("Website").style.display=="block"){
    document.getElementById("Website").style.display="none";
  }
  else {document.getElementById("Website").style.display="block";}
}

function GitOn(){
  if (document.getElementById("Github").style.display=="block"){
    document.getElementById("Github").style.display="none";
  }
  else {document.getElementById("Github").style.display="block";}
}

function PianoOn(){
  if (document.getElementById("Piano").style.display=="block"){
    document.getElementById("Piano").style.display="none";
  }
  else {document.getElementById("Piano").style.display="block";}
}

function DukeOn(){
  if (document.getElementById("Duke").style.display=="block"){
    document.getElementById("Duke").style.display="none";
  }
  else {document.getElementById("Duke").style.display="block";}
}

function OSOn(){
  if (document.getElementById("OS").style.display=="block"){
    document.getElementById("OS").style.display="none";
  }
  else {document.getElementById("OS").style.display="block";}
}

function SportsOn(){
  if (document.getElementById("Sports").style.display=="block"){
    document.getElementById("Sports").style.display="none";
  }
  else {document.getElementById("Sports").style.display="block";}
}

function Default(){
  document.getElementById('Home').style.display='block';
}


     /*Academic*/

 function TransOn(){
   if (document.getElementById("Trans").style.display=="block"){
     document.getElementById("Trans").style.display="none";
   }
   else {document.getElementById("Trans").style.display="block";}

 }

 function MathsOn(){
   if (document.getElementById("Maths").style.display=="block"){
     document.getElementById("Maths").style.display="none";
   }
   else {document.getElementById("Maths").style.display="block";}

 }

 function DebateOn(){
   if (document.getElementById("Debate").style.display=="block"){
     document.getElementById("Debate").style.display="none";
   }
   else {document.getElementById("Debate").style.display="block";}

 }

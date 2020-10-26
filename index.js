var colours = [
  "rgb(255,0,0)",
  "rgb(255,165,0)",
  "rgb(255,255,0)",
  "rgb(0,128,0)",
  "rgb(173,216,230)",
  "rgb(0,0,255)",
  "rgb(255,255,255)",
  "rgb(128,128,128)",
  "rgb(255,192,203)",
];

// querySelector takes a CSS variable hence the full stop
var squares = document.querySelectorAll(".square");

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colours[i];
}

function shuffle1() {
  var parent = document.getElementById("shuffle");
  var frag = document.createDocumentFragment();
  while (parent.children.length) {
    frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
  }
  parent.appendChild(frag);
}

var b = [];
document.getElementById("hideaway").addEventListener("mouseover", function() {
  document.getElementById("hideaway").style.visibility = "hidden";
  b.push(document.getElementById("hideaway").textContent);
  if (b.length==9){
    alert(b);

  }
});
document.getElementById("hideaway1").addEventListener("mouseover", function() {
  document.getElementById("hideaway1").style.visibility = "hidden";
  b.push(document.getElementById("hideaway1").textContent);
  if (b.length==9){
    alert(b);

  }
});
document.getElementById("hideaway2").addEventListener("mouseover", function() {
  document.getElementById("hideaway2").style.visibility = "hidden";
  b.push(document.getElementById("hideaway2").textContent);
  if (b.length==9){
    alert(b);

  }
});
document.getElementById("hideaway3").addEventListener("mouseover", function() {
  document.getElementById("hideaway3").style.visibility = "hidden";
  b.push(document.getElementById("hideaway3").textContent);
  if (b.length==9){
    alert(b);

  }
});
document.getElementById("hideaway4").addEventListener("mouseover", function() {
  document.getElementById("hideaway4").style.visibility = "hidden";
  b.push(document.getElementById("hideaway4").textContent);
  if (b.length==9){
    alert(b);

  }
});
document.getElementById("hideaway5").addEventListener("mouseover", function() {
  document.getElementById("hideaway5").style.visibility = "hidden";
  b.push(document.getElementById("hideaway5").textContent);
  if (b.length==9){
    alert(b);

  }
});
document.getElementById("hideaway6").addEventListener("mouseover", function() {
  document.getElementById("hideaway6").style.visibility = "hidden";
  b.push(document.getElementById("hideaway6").textContent);
  if (b.length==9){
    alert(b);

  }
});
document.getElementById("hideaway7").addEventListener("mouseover", function() {
  document.getElementById("hideaway7").style.visibility = "hidden";
  b.push(document.getElementById("hideaway7").textContent);
  if (b.length==9){
    alert(b);

  }
});
document.getElementById("hideaway8").addEventListener("mouseover", function() {
  document.getElementById("hideaway8").style.visibility = "hidden";
  b.push(document.getElementById("hideaway8").textContent);
  if (b.length==9){
    alert(b);

  }
});

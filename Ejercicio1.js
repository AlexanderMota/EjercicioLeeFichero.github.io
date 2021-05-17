let capa = document.querySelector("div");


capa.addEventListener("mouseover",function(e) {
  this.className = "conColor";
});

capa.addEventListener("mouseout",function(e) {
  this.className = "sinColor";
});

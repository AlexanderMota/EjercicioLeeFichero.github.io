let capa = document.querySelector("div");


capa.addEventListener("mouseover",function(e) {
  this.className = "conColor";
});

capa.addEventListener("mouseout",function(e) {
  this.className = "sinColor";
});

function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let librerias = xmlDoc.querySelectorAll("libreria")
	for(let i=0; i<librerias.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + librerias[i].querySelector("nombre").TextContent + "</p>"
}

let capa = document.querySelector("div:nth-child(1)") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("leerFicheroXML.xml","xml");
}

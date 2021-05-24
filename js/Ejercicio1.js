
console.log('JS intento ajax Activo.');

document.querySelector('#boton').addEventListener('click', cargaDatos);

function cargaDatos()
{
	//console.log('funcion activa.');
	const xhttp = new XMLHttpRequest();

	xhttp.open('GET', 'txt/archivo.txt', true);

	xhttp.send();

	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			//console.log(this.responseText);
			document.querySelector('#respuesta').innerHTML = this.responseText;
		}
	}
}



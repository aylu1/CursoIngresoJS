/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
let nombreIngresado;
	nombreIngresado =prompt("Ingrese su nombre ");
	document.getElementById('txtIdNombre').value=nombreIngresado;

	/*entrada de datos es por 
	variable=prompt()
	variable=document.getElementById('').value;

	//salida de datos
	alert();
	document.getElementById('').value=variable;
	*/
}


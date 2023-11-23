document.getElementById("botonCalcular").addEventListener("click", function() {
    var costoC = Number(document.getElementById("costo").value);
    var porcentajeP = Number(document.getElementById("porcentaje").value);

    var propina = (costoC * (porcentajeP*0.01));
    var totalPagar = costoC + propina;

    // Asigna valores al span 
    document.getElementById("resultadoPropina").textContent = propina; //toFixed redondea a 2 decimales
    document.getElementById("resultadoTotal").textContent = totalPagar;

    // Asigna valores al span en la ventana emergente
    document.getElementById("compraVentana").textContent = costoC;
    document.getElementById("porcentajeVentana").textContent = porcentajeP;
    document.getElementById("resultadoPropinaVentana").textContent = propina.toFixed(2);
    document.getElementById("resultadoTotalVentana").textContent = totalPagar.toFixed(2);
});

//Acciones de la ventana emergente
const mostrarVentana = document.getElementById("botonCalcular");
const cerrarVentana = document.getElementById("cerrarVentana");
const ventanaEmergente = document.getElementById("ventanaEmergente");

mostrarVentana.addEventListener("click", () => {
    ventanaEmergente.style.display = "block";
});

cerrarVentana.addEventListener("click", () => {
    ventanaEmergente.style.display = "none";
	
	// Borrar el contenido de los campos de entrada
    var input = document.getElementById("costo");
    input.value = "";
    var input = document.getElementById("porcentaje");
    input.value = "";
	document.getElementById("resultadoPropina").textContent = "0.00";
    document.getElementById("resultadoTotal").textContent = "0.00";
    document.getElementById("porcentajePropina").textContent = "15";
});

//Para ver la funcion del Range
const rangoPropina = document.getElementById("porcentaje");
const porcentajePropina = document.getElementById("porcentajePropina");

rangoPropina.addEventListener("input", () => {
	porcentajePropina.textContent = rangoPropina.value;
});
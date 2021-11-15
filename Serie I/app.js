

alert('Bienvenido al programa para el cálculo del valor a pagar por el usuario por el traslado de su paquete, se le solicita que ingrese correctamente los datos que se le solicitaran a continuacion')



var ejecutar= function(a){     
    var SelectedValue = document.getElementById("list").value;
    var a=SelectedValue

    if (a==0) {
    location.href=location.href;
    return "El tipo de mercaderia seleccionada son documentos por lo que su tarifa de traslado es de Q40 a cualquier parte del pais, gracias por el programa ";  
}

else {
    return "El tipo de mercaderia seleccionada es "+a +" por lo que puede continuar con el proceso";  
}

}

var ejecutar1 = function(s){
    return "Ha confirmado que conoce el peso del articulo por lo que puede continuar con el formulario"
    }

	var ejecutar2 = function(n){
        alert('Ha seleccionado que no conoce el peso del articulo por lo que se solicita que ingrese los datos que se le mostraran a continuacion para calcular el peso volumetrico')
        var largo=prompt('Ingrese la longitud del articulo en centimetros')
        var ancho=prompt('Ingrese el ancho del articulo en centimetros')
        var altura=prompt('Ingrese la altura del articulo en centimetros')
        var pesovolum=Number(((largo*ancho*altura)/2272).toFixed(2))
        return "Su peso es de " +pesovolum +"kg, se solicita que ingrese este numero en la siguiente casilla"
        }

        var ejecutar3= function(a){     
            var SelectedValue1 = document.getElementById("list1").value;
            var b=SelectedValue1

            if (b==300) {
            return "La sucursal seleccionada ha sido la de Izabal por lo que la distancia de su paquete es de 300km";  
        }

        if (b==460) {
            return "La sucursal seleccionada ha sido la de Peten por lo que la distancia de su paquete es de 460km";
        }

        if (b==10) {
            return "La sucursal seleccionada ha sido la de Guatemala por lo que la distancia de su paquete es de 10km";  
        }
        if (b==178) {
            return "La sucursal seleccionada ha sido la de Chiquimula por lo que la distancia de su paquete es de 178km";
        }
        else {
            return "La sucursal seleccionada ha sido la de Retalhuleu por lo que la distancia de su paquete es de 200km";
        }
    
    }

    var ejecutar4= function (t){
        var peso = document.getElementById("peso").value;
        var SelectedValue1 = document.getElementById("list1").value;
        var SelectedValue = document.getElementById("list").value;
        var a=SelectedValue
        var b=SelectedValue1
        var tarifa=Number(((peso*2.5)+(b*0.13)).toFixed(2))
        alert("La tarifa a pagar es de "+tarifa +"Q, el tipo de mercaderia indicada es " +a +" y la distancia es de " +b +"km");
        location.href=location.href;
        return "Gracias por haber llenado el formulario!"
    }
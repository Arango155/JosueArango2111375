alert("Bienvenido a una pagina hecha a traves de Html, Css y Javascript donde se daran ejemplos de diferentes ciclos y funciones de Js");

var ejecutar = function(r){
    var a = prompt("Ingrese el primer numero");
    var b = prompt("Ingrese el segundo numero");
    a = parseFloat(a);
    b = parseFloat(b);
    var r=prompt("Ingresa el Símbolo de la Operación que deseas realizar\n+ Suma\n- Resta\n* Multiplicación\n/ División");
 

    switch (r){
    case "+": 
                s=a+b;
                return "La suma de " +s; break;
                

    case "-": 
                res=a-b;
                return "La Resta de " +res; break;
                

    case "*": 
                m=a*b;
                return "La Multiplicación de " +m; return;
                

    case "/": 
                 d=a/b;
                return "La División de " +d; return;
    } 
}

var ejecutar1 = function(){
    var x = prompt("Ingrese su numero de carnet, recuerde que consta de 7 digitos");
    x = parseInt(x);
    if(x<1000000){
        return ("Numero de carnet invalido, el numero de carnet consta de 7 digitos");
        
    }
    if(x>9999999){
        return ("Numero de carnet invalido, el numero de carnet consta de 7 digitos");
        
    }
    
    else {
        return "Numero de carnet valido, gracias por probar el ejemplo"
    }
    
}

var ejecutar2=function(){
    var tabla = prompt("Ingresar que tabla quieres multiplicar");
    var cantidad = prompt("Ingresa hasta que numero multiplicar");
 

    for(let i=1; i<=cantidad; i++){
        alert((tabla+"x"+i+"="+(tabla*i)))
        }
       return "Gracias por haber probado este ejemplo";
}

var ejecutar3=function(){
    var n = prompt("Ingresa el numero hasta donde quieres contar");
    n = parseFloat(n);
    var x = 1;
   
    
    while(x<=n){
        alert(x);
        x++;
    }
    return "Gracias por haber probado este ejemplo";
}

var ejecutar4=function(){
    let z = [];

        for(let i = 0; i < 1; i++){
            z[i] = Math.round(Math.random()); 
        }

        return "El estado del qubit es: " +z;
    
       

    }

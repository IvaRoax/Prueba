
var listaEnlaces = document.getElementsByTagName('u'); //Aqui creamos una lista de enlace y recorremos la
    //lista de elementos por su tagname que en este caso es u

for (var i = 0; i < listaEnlaces.length; i++) { //Usamos for para recorrerlos
    console.log(listaEnlaces[i].innerHTML);//Voy a mostrar por consola el contenido (innerHTML) de esos elementos
    listaEnlaces[i].onclick = function() { //Aqui definimos una funcion
                                    document.getElementById('eleccion').innerHTML = this.innerHTML;
                                    console.log("Cambio");
    }//Esta funcion lo que hace es buscar el elemento por ID que es eleccion (span en archivo HTML)
}    //Y va a modificar su contenido por HTML que por defecto esta vacio y va a coger del elemento en el
     //que estoy el contenido en HTML (this.innerHTML). Bien explicado en VT3(D)31m.20s
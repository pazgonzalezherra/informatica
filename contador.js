let contador = 10;
let boton = document.getElementById("btndisminuir");
let numero = document.getElementById("conteo");

sssboton.addEventListener("click", function(){
    if (contador > 0) {
        contador--;
        numero.textContent = contador;
    } else {
        alert("El contador ya está en cero. No se puede disminuir más");
    }
});
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("btn-login").addEventListener("click", function(){
        let nombre = document.getElementById("nombre").value;
        let password = document.getElementById("password").value;
        if ((password != "") && (nombre != "")){
            // Acá va el setItem
            localStorage.setItem('nombre', nombre);
            // Termina el setItem
            location.replace("index.html");
        } else {
            alert ("Debe completar los campos.");
        }
    })
});

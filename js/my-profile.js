//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    let ImgValue = document.getElementById("inputImg");
    let boton = document.getElementById("boton");

    let nuevoPerfil = localStorage.getItem("perfil")

    if(nuevoPerfil){
        nuevoPerfil = JSON.parse(nuevoPerfil)

        document.getElementById("inputImg").value = nuevoPerfil.avatar;
        document.getElementById("nombre").value = nuevoPerfil.nombre;
        document.getElementById("segundoNombre").value = nuevoPerfil.segundoNombre;
        document.getElementById("apellido").value = nuevoPerfil.apellido;
        document.getElementById("segundoApellido").value = nuevoPerfil.segundoApellido;
        document.getElementById("edad").value = nuevoPerfil.edad;
        document.getElementById("email").value = nuevoPerfil.email;
        document.getElementById("telefono").value = nuevoPerfil.telefono;

        if(nuevoPerfil.avatar!= ""){

         document.getElementById("imgSrc").src = nuevoPerfil.avatar;
        }
    }

    boton.addEventListener("click", function () {

        let nombre = document.getElementById("nombre");
        let segundoNombre = document.getElementById("segundoNombre");
        let apellido = document.getElementById("apellido");
        let segundoApellido = document.getElementById("segundoApellido");
        let edad = document.getElementById("edad");
        let email = document.getElementById("email");
        let telefono = document.getElementById("telefono");

        let validacion = true;

        if (nombre.value.trim() === "") {
            validacion = false
        }

        if (segundoNombre.value.trim() === "") {
            validacion = false
        }

        if (apellido.value.trim() === "") {
            validacion = false
        }

        if (segundoApellido.value.trim() === "") {
            validacion = false
        }

        if (edad.value.trim() === "") {
            validacion = false
        }

        if (email.value.trim() === "") {
            validacion = false
        }

        if (telefono.value.trim() === "") {
            validacion = false
        }

        if (validacion) {

            localStorage.setItem(

                "perfil", JSON.stringify({

                    avatar : ImgValue.value,
                    nombre: nombre.value,
                    segundoNombre : segundoNombre.value,
                    apellido : apellido.value,
                    segundoApellido : segundoApellido.value,
                    edad : edad.value,
                    email : email.value,
                    telefono : telefono.value
                }) 
 
            );
           
           window.location = "my-profile.html";
        } 

        
    });

});
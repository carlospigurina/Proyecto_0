var product = {};
var comentariosArray = [];
var carusel = {};

// Función que muestra la galeria de imagenes de los productos y comentarios en general.
function showProductsImagesGallery(array) {

    let htmlContentToAppend = "";
    let comentariosParaHtml = "";
    
    // Carrusel de imágenes del producto.
    htmlContentToAppend += `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="${array[0]}" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="${array[1]}" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="${array[2]}" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="${array[3]}" class="d-block w-100" alt="">
        </div>
        <div class="carousel-item">
          <img src="${array[4]}" class="d-block w-100" alt="">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    `
  
    //Se incorpora el Carrusel de imágenes dentro del HTML.
    document.getElementById("productsImagesGallery").innerHTML = htmlContentToAppend;
    
  
    //Lista o Array de comentarios más su calificación.
    for (let i = 0; i < comentariosArray.length; i++) {
      let puntos = "";
      let comment = comentariosArray[i];
  
      comentariosParaHtml += "<hr>" + comment.user + ": <br><br>"
      comentariosParaHtml += comment.description + "<br><br>"
      comentariosParaHtml += " fecha : " + comment.dateTime + "<br><br>"
  
  
      for (let i = 1; i <= comment.score; i++) {
        puntos += `<span class="fa fa-star checked"></span>`;
      }
      for (let i = comment.score + 1; i <= 5; i++) {
        puntos += `<span class="fa fa-star"></span>`;
      }
  
      comentariosParaHtml += `<div style="text-align: right;">${puntos}</div><hr>`
  
    };

    //Se incorpora la Lista o Array de comentarios dentro del HTML.  
    document.getElementById("contComment").innerHTML = comentariosParaHtml;
  
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    //Función que extrae datos del JSON "PRODUCT_INFO:COMMENTS_URL".
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
      if (resultObj.status === "ok") {
  
        comentariosArray = resultObj.data;
        
        //Función que extrae datos del JSON "PRODUCT_INFO_URL".
        getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
          if (resultObj.status === "ok") {
  
            product = resultObj.data;
  
            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCost = document.getElementById("productCost");
            let productCategory = document.getElementById("productCategory");
            let productSoldCount = document.getElementById("productSoldCount");
  
  
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCost.innerHTML = product.currency + - + product.cost
            productCategory.innerHTML = product.category;
            productSoldCount.innerHTML = product.soldCount;
  
            //Ejecuta la función "showProductsImagesGallery" para que imprima en el HTML las imagenes del Producto y la Lista o Array comentarios.
            showProductsImagesGallery(product.images, comentariosArray);
          };
  
        });
  
      };
  
  
    });
  
  
  
  
    //Función para que crear un nuevo comentario y calificación e imprimirlo en el HTML con los demás comentarios y calificaciones.
    document.getElementById("botonEnviar").addEventListener('click', () => {
  
      // fecha
      let now = new Date();
      let tiempo = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} `;
      tiempo += `${now.getHours()}: ${now.getMinutes()}: ${now.getSeconds()} `;
  
      let star = document.querySelectorAll(".sr");
      let resultado = "";
  
      for (let radio of star) {
        if (radio.checked) {
          resultado = radio.value;
        }
      }
  
  
      let newComment = {
        score: parseInt(resultado),
        description: document.getElementById("textoComentario").value,
        user: prueba,
        dateTime: tiempo
      };
  
      comentariosArray.push(newComment);

      //Se incorpara el nuevo comentario dentro de la función "showProductsImagesGallery" y se lo ejecuta.
      showProductsImagesGallery(product.images, comentariosArray);
    });
  
  
  
});
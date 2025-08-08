//Se define la funcion llamada agregarBotones
// Dentro de la funcio se seleccionan todos los elementos con la clase .album

const input = document.querySelector(".search")
const titulo3 = document.querySelectorAll("h3");
const albums = document.querySelectorAll(".album");
let texto = "";
let nombreCancion = "";

function cancionBuscada() {
    input.addEventListener("input", function () {
        texto = input.value.toLowerCase();

        titulo3.forEach((titulo, i) => {
            nombreCancion = titulo.textContent.toLowerCase();

            nombreCancion.includes(texto)? albums[i].style.display = "block": albums[i].style.display = "none"; 
            
        });
    });
}

function agregarBotonesLike() {

  //Recorre cada uno de los a
  albums.forEach((album) => {
    //Crear el boton en cada tarjeta le agrega una clase para poder darle estilo
    const likeBtn = document.createElement("button");
    likeBtn.classList.add("botonMeGusta");

    //Crear el icono dentro del boton
    const icono = document.createElement("i");
    icono.classList.add("bx", "bx-plus-circle");

    //Evento de clic para alternar la clase "liked"
    likeBtn.onclick = function () {
      icono.classList.toggle("liked");
      const isLiked = icono.classList.contains("bxs-check-circle");

      if (isLiked) {
        icono.classList.remove("bxs-check-circle");
        icono.classList.add("bx-plus-circle");
      } else {
        icono.classList.remove("bx-plus-circle");
        icono.classList.add("bxs-check-circle");
      }

      album.classList.toggle("succesfull");
    };

    //Armar el boton
    likeBtn.appendChild(icono);
    album.appendChild(likeBtn);
  });

}

const toggleBtn = document.getElementById("modo-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("modo-claro");
  if (body.classList.contains("modo-claro")) {
    toggleBtn.textContent = "🌚 Modo Oscuro";
  } else {
    toggleBtn.textContent = "🌙 Modo Claro";
  }
});

//Ejecutar cuando cargue la pagina
window.onload = agregarBotonesLike;
window.onload = cancionBuscada;
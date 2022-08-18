const movieImage = document.querySelector(".movie-image");
const movieTitle = document.querySelector(".movie-title");
const movieYear = document.querySelector(".movie-year");
const movieDescription = document.querySelector(".movie-description");
const contenedor = document.querySelector(".info-side");

const cargarPeliculas = async () => {

    try {

        const respuesta = await fetch('https://ghibliapi.herokuapp.com/films/');

        console.log(respuesta)

        if (respuesta.status ===200){
            const datos = await respuesta.json();
            
            const tarjeta = document.createDocumentFragment();

           datos.forEach(film => {
            tarjeta = `
            movieTitle = ${film.title}`

            })

        } else if(respuesta.status === 401) {
            console.log("Error de autenticación")
        } else if (respuesta.status === 404) {
            console.log ("Pelicula no encontrada")
        } else {
            console.log("Error desconocido")
        }

    } catch(error){
        console.log(error)
    }
}
cargarPeliculas();
const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f58b2d2fe9cac1fc7b6254a83fd57afb"
    );
    console.log(respuesta);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      let peliculas = "";

      datos.results.forEach((pelicula) => {
        peliculas += `
                <div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <h3 class="titulo">${pelicula.title}<h3>
                <button id="boton${pelicula.id} "type="button" onclick="" class="btn agregar-cola  btn-primary">Add to play list</button>
                </div>
            
        `;
      });

      document.getElementById("contenedor").innerHTML = peliculas;
    } else if (respuesta.status === 401) {
      console.log("no hay una respuesta de la API");
    } else if (respuesta.status === 404) {
      console.log("no existe la pelicula");
    } else {
      console.log("hubo un error");
    }
  } catch (error) {
    console.log(error);
  }

};

cargarPeliculas();

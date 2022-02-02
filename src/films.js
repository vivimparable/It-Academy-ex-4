// Exercise 1: Get the array of all directors.

function getAllDirectors(array) {
  

  
  let result=array.map( directoresPelicula=> directoresPelicula.director);


  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 
let result =  array.filter(certainFilm => certainFilm.director == director);



return result;


}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array,director) {
  
let directorEscogido = array.filter(certainFilm =>  certainFilm.director==director);

let peliculasScore = directorEscogido.map( directorScores =>  directorScores.score
);



let resultado = peliculasScore.reduce((num,num2)=> num + num2);

let cuantasPeliculasLongitud= peliculasScore.length;
let resultadoNuevo = resultado / cuantasPeliculasLongitud;
 
return resultadoNuevo;

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let peliculas = array.map( pelisAlfabetico => pelisAlfabetico.title);
 
  let result = peliculas.sort();
   return result.slice(0,20);//para devolver un nummero predeterminado de elementos
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let newArray = [];

  let ordered = array
  .sort((a, b) => { 
  if (a.year === b.year){

    return a.title > b.title ? 1: -1;

  }

  return a.year - b.year});

  newArray=[...ordered];
return newArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, categoria) {

  let PeliculasPorCategoria = array.filter(pelicula => 
    //filtro que contenga el genero y el score.

  pelicula.genre.includes(categoria) && pelicula.score);

//hago la media que se podia hacer con la función.

  let result = PeliculasPorCategoria.reduce((a, b) => a.score + b.score) / PeliculasPorCategoria.length;
  if(PeliculasPorCategoria.length > 1) {
//si es más de una.
    return result;

  } else {
//si solo es 1 devuelvo la primera del array.
      return PeliculasPorCategoria[0].score;

  }


}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
//______________________________________//
//______________________________________//
//***PRUEBAS, EJERCICIO NO HECHO  IGNORAR***/
//_______________________________________//
//_______________________________________//
let peli = array.filter(a => a.title == 'Dog Day Afternoon');
let horas = peli.map (hours => hours.duration);
//pelicula buscada y horas de la pelicula buscadas.

let nuevo = new String(horas);
//Creo un nuevo String de las horas.

let separado = nuevo.replace("h","").replace("min","");
//le quit las H y los min por nada.

let numero1 = parseInt(separado[0]);
//el primer numero lo convierto de string a numero.

let numero2 = separado[2]+separado[3];
//el segundo numero pasa a ser un String de los dos numeros o numero que hayan. 

if(!numero2 ==""){
//si el numero 2 NO está vacío.

let newNumero2 = parseInt(numero2);
//transformo el numero2 a un numero INT

let newtotal = numero1*60+newNumero2;
//ejecuto la operación

  console.log("EX 7", newtotal);
//SALE BIEN

  return newtotal;
}else{
  //Cualquier otra cosa

  let newReturn = numero1*60;
  //multiplico solo el numero 1.
 
  console.log(newReturn);
  //funciona

  return newReturn;
}
 


}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array,year) {
  //filtro el año de la película
  let result = array.filter(movie => movie.year === year);

//Me daba error por el .map!!

  let result2 = result.sort((a, b) => a+b); //si es a-b se hace descendiente pero a+b es al revés.

  let final = result2.slice(0,1);// slice para coger solo el primer elemento.
  return final;

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

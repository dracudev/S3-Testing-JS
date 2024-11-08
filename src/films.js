// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let directors =  array.map(array => array.director);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let directorsMovies =  array.filter(array => array.director === director);
  return directorsMovies;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorAverage =  array.filter(array => array.director === director)
  directorAverage = directorAverage.reduce((acc, array) => acc + array.score, 0) / directorAverage.length;
  return directorAverage
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let alphaTitle =  array.map(array => array.title).sort((a, b) => (a < b ? -1 : 1)).slice(0, 20);
  return alphaTitle;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let orderYear =  array.slice().sort((a, b) => {
    if (a.year === b.year)
      return a.title < b.title ? -1 : 1
  return a.year - b.year
  })
  return orderYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let categoryAverage =  array.filter(array => array.genre.includes(genre)).reduce((acc, array) => acc + array.score, 0) / array.length;
  return parseFloat(categoryAverage.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let hoursToMins = array.map(movies => {

  let myMovies = {...movies}

  myMovies.duration = myMovies.duration.split(" ")
  let hours = parseFloat(myMovies.duration[0].replace(/[^\d]/g, ''))
  let mins = 0;
  if (myMovies.duration[1])
    mins = parseFloat(myMovies.duration[1].replace(/[^\d]/g, ''))

  myMovies.duration = hours * 60 + mins
  return {...myMovies};
})
return hoursToMins;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let bestFilm = array.filter(movies => movies.year = year)

  bestFilm = bestFilm.sort((a, b) => b.score - a.score)

  bestFilm = [bestFilm[0]]

  return bestFilm;
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

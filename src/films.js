// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(array => array.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result =  array.filter(array => array.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result =  array.filter(array => array.director === director)
  result = result.reduce((acc, array) => acc + array.score, 0) / result.length;
  return result
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result =  array.map(array => array.title).sort((a, b) => (a < b ? -1 : 1)).slice(0, 20);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result =  array.slice().sort((a, b) => {
    if (a.year === b.year)
      return a.title < b.title ? -1 : 1
  return a.year - b.year
  })
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let result =  array.filter(array => array.genre.includes(genre)).reduce((acc, array) => acc + array.score, 0) / array.length;
  return parseFloat(result.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let result = array.map(movies => {

  let myMovies = {...movies}

  myMovies.duration = myMovies.duration.split(" ")
  let hours = parseFloat(myMovies.duration[0].replace(/[^\d]/g, ''))
  let mins = 0;
  if (myMovies.duration[1])
    mins = parseFloat(myMovies.duration[1].replace(/[^\d]/g, ''))

  myMovies.duration = hours * 60 + mins
  return {...myMovies};
})
return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let result = array.filter(movies => movies.year = year)

  result = result.sort((a, b) => b.score - a.score)

  result = [result[0]]

  return result;
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

# S3 Movie Data Processing

## 📄 Description

This sprint focuses on developing functions to manage and analyze a dataset of movies, including tasks like extracting director data, calculating average ratings, and sorting movies. The project emphasizes the practice of essential JavaScript methods such as `map`, `reduce`, and `filter`, as well as creating unit tests to verify functionality.

### Objectives

- Practice using array methods like `map`, `reduce`, and `filter`.
- Learn to create unit tests.
- Manipulate a dataset for targeted information extraction.

<br>

## 📐 Project Structure

### ⭐ Level 1

- **Exercise 1**: Implement the `getAllDirectors()` function, which returns an array containing only the directors of the movies. Use `.map()` to extract the director field from each movie object. This function should not render the result; it should return the array.

- **Exercise 2**: Create the `getMoviesFromDirector()` function, which receives a director's name as a parameter and returns an array of movies they directed. Use `.filter()` to isolate movies by the specified director.

- **Exercise 3**: Implement the `moviesAverageOfDirector()` function, which calculates the average rating of a director's movies. This function should accept an array of movies and return the average rating with two decimal precision. Use `.reduce()` to compute the average.

- **Exercise 4**: Develop a function to sort movies alphabetically by title and return only the first 20 titles. Review the tests in `films.spec.js` to verify whether you need to return full movie objects or only titles.

- **Exercise 5**: Create a function to sort movies by release year. If multiple movies share the same year, they should be further sorted alphabetically by title.

- **Exercise 6**: Implement functionality for users to view the average rating of movies within a specified genre. Begin by writing a unit test for this feature in `tests/films.spec.js`. Then, create a function that accepts a genre as input and calculates the average rating for that genre.

### ⭐⭐ Level 2

- **Exercise 7**: Convert movie durations from the "hours and minutes" format to a single integer in minutes. For example, a movie duration of "2h 34min" should be converted to `154`.

### ⭐⭐⭐ Level 3

- **Exercise 8**: Implement a function to identify the highest-rated movie of each year. This function should accept a year as input and return the top-rated movie for that year.

<br>

## 💻 Technologies Used

- JavaScript (ES6)
- Jest.js (for testing)

<br>

## 📋 Requirements

- **JavaScript ES6** or higher
- **Jest.js** for running unit tests

<br>

## 🛠️ Installation

1. Clone this repository: 
  ```bash
  git clone https://github.com/dracudev/S3-Testing-JS.git
  ```
2. Navigate to the project directory: 
  ```bash
  cd S3-Testing-JS
  ```
3. Open the project in your text editor and start coding.
  ```bash
  code .
  ```

<br>

<br>

## ▶️ Execution

1. Run the tests to validate functionality. This will automatically generate a test-results.html file showing test outcomes.
  ```bash
  npm install
  npm run test:watch
  ```

2. Open test-results.html in a browser (recommended to use the Live Server plugin in Visual Studio Code for auto-refresh).

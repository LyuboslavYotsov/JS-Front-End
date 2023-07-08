function printValidMovies(input) {
  const movieLibrary = [];

  for (let string of input) {
    const commandType = string.match(/[a-z]+[A-Z]{1}[a-z]+/gm).toString();
    const stringWithoudCommand = string.replace(commandType, "");

    if (commandType === "addMovie") {
      let movie = {};
      movie.name = stringWithoudCommand.trim();
      movieLibrary.push(movie);
    } else if (commandType === "directedBy") {
      [movieName, director] = string.split(" directedBy ");

      for (const movie of movieLibrary) {
        if (movie.name === movieName) {
          movie.director = director;
        }
      }
    } else if (commandType === "onDate") {
      [movieName, date] = string.split(" onDate ");

      for (const movie of movieLibrary) {
        if (movie.name === movieName) {
          movie.date = date;
        }
      }
    }
  }
  for (const movie of movieLibrary) {
    if (
      movie.hasOwnProperty("name") &&
      movie.hasOwnProperty("director") &&
      movie.hasOwnProperty("date")
    ) {
      console.log(JSON.stringify(movie));
    }
  }
}

printValidMovies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
printValidMovies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);

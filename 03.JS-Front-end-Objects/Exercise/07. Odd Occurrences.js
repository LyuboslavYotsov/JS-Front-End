function printElementsWithOddOccurrences(input) {
  const words = input.toLowerCase().split(" ");

  const occurrences = words.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
      return acc;
    }

    acc[curr]++;
    return acc;
  }, {});

  const oddWords = Object.keys(occurrences)
    .filter((occ) => occurrences[occ] % 2 !== 0)
    .join(" ");

    console.log(oddWords);
}

printElementsWithOddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
printElementsWithOddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
